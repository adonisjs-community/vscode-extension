import { CommandSteps } from "../tasks/types/commandSteps";
import { VscodeCommand } from "../tasks/types";
const AdonisCommands = require("@adonisjs/cli/src/Commands");

/**
 * Create a VSCode command
 */
export function createVscodeCommand(
  key: string,
  steps: CommandSteps,
  baseName: string = "adonisjs"
): VscodeCommand {
  const CommandHandler = AdonisCommands[key];

  return {
    steps,
    key: toVscodeCommandKey(baseName, key),
    description: CommandHandler.description,
    handle: async (compulory: any = {}, optional: any = {}) => {
      new CommandHandler().handle(compulory, optional);
    }
  };
}

/**
 * Convert adonis command to corresponding vscode command key in package.json.
 *
 * @param adonisCommand Adonis command key
 */
function toVscodeCommandKey(vscodeBaseName: string, adonisCommand: string) {
  return `${vscodeBaseName}.${adonisCommand.replace(/:/, ".")}`;
}
