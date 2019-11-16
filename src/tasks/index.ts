import Commands from "./commands";
import { commands, Disposable } from "vscode";
import { selectWorkspaceFolder } from "../utilities/workspace";

function registerCommands(): Disposable[] {
  return Commands.map(function(command) {
    return commands.registerCommand(command.key, async function() {
      let params, folder;

      try {
        params = await command.steps.collectInputs();
        const message = "Select workspace folder to execute command";
        folder = await selectWorkspaceFolder(message);
        if (!folder) return;
      } catch (err) {
        return;
      }

      process.chdir(folder.uri.fsPath);
      await command.handle(params.required, params.optional);
    });
  });
}

export default registerCommands;
