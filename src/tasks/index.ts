import Commands from "./commands";
import { commands, Disposable, window } from "vscode";
import { VscodeCommand, CommandOutput } from "./types";
import { showCommandOutput } from "../utilities/command";
import { selectWorkspaceFolder } from "../utilities/workspace";

/**
 * Execute the command provided.
 *
 * @param command Command to execute
 */
async function executeCommand(command: VscodeCommand) {
  try {
    // Collect user input
    const { Config } = await import("../utilities");
    const disableOptionalPrompts = Config.tasks.disableOptionalValuePrompts;
    const { required, optional } = await command.steps.collectInputs(
      disableOptionalPrompts
    );

    const message = "Which workspace folder should the command be executed in?";
    const folder = await selectWorkspaceFolder(message);
    if (!folder) return;

    // Execute command
    const output = await command.handle(folder.uri.fsPath, required, optional);
    await showCommandOutput(output);
  } catch (err) {
    await showCatchedError(err);
  }
}

/**
 * Register all AdonisJS commands supported.
 */
function registerCommands(): Disposable[] {
  return Commands.map(function(command) {
    return commands.registerCommand(
      command.key,
      async () => await executeCommand(command)
    );
  });
}

/**
 * Handle any error thrown while exucting an adonis command.
 *
 * @param {stdout, stderr, message}
 */
async function showCatchedError({
  stderr,
  stdout,
  message
}: CommandOutput & { message: string }) {
  let err = stdout ? stdout.trim() : "";
  if (err.length === 0) {
    err = stderr && stderr.trim().length > 0 ? stderr.trim() : message || "";
  }

  await showCommandOutput({ stderr: err, stdout: "" });
}

export default registerCommands;
