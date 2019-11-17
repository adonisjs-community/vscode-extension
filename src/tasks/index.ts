import Commands from "./commands";
import { VscodeCommand } from "./types";
import { commands, Disposable, window } from "vscode";
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
    const inputs = await command.steps.collectInputs(disableOptionalPrompts);

    const message = "Which workspace folder should the command be executed in?";
    const folder = await selectWorkspaceFolder(message);
    if (!folder) return;

    // Execute command
    process.chdir(folder.uri.fsPath);
    await command.handle(inputs.required, inputs.optional);
  } catch (err) {
    await window.showErrorMessage(err.message);
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

export default registerCommands;
