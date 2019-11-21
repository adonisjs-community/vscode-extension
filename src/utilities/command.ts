import { VscodeCommand, CommandOutput } from "../tasks/types";
import { CommandSteps } from "../tasks/types/commandSteps";
import { exec as cmdExec } from "child_process";
import stripAnsi = require("strip-ansi");
import { promisify } from "util";
import { window } from "vscode";
import { Config } from ".";

const exec = promisify(cmdExec);

/**
 * Create a VSCode command.
 */
export function createVscodeCommand(
  key: string,
  steps: CommandSteps,
  baseName: string = "adonisjs"
): VscodeCommand {
  return {
    steps,
    description: steps.description,
    key: toVscodeCommandKey(baseName, key),
    handle: async (cwd: string, compulsory: any = {}, optional: any = {}) => {
      compulsory = Object.values(compulsory).join(" ");
      optional = adonisOptionalParamsToString(optional);

      return executeAdonisCommand(`${key} ${compulsory} ${optional}`, cwd);
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

/**
 * Convert adonis command optional parameters to equivalent string.
 *
 * @param optional Optional parameters
 */
function adonisOptionalParamsToString(optional: {}): string {
  return Object.entries(optional)
    .map(([key, value]) =>
      typeof value === "boolean" ? `--${key}` : `--${key}=${value}`
    )
    .join(" ");
}

/**
 * Execute an AdonisJS command in specified direcory.
 *
 * @param command AdonisJS command to execute e.g. make:model
 * @param cwd Adonis project directory to excute command in
 */
async function executeAdonisCommand(
  command: string,
  cwd: string
): Promise<CommandOutput> {
  const adonis = Config.tasks.adonisExecutable;
  const maxBuffer = Config.tasks.maxBuffer;
  const cmd = `${adonis} ${command}`;

  return exec(cmd, { maxBuffer, cwd, encoding: "utf8" });
}

/**
 * Show command output of a command in vscode dialog depending on
 * the nature of the output (i.e. either stderr or stdout).
 *
 * @param { stdout, stderr}
 */
export async function showCommandOutput({ stderr, stdout }: CommandOutput) {
  stderr = stderr ? stripAnsi(stderr).replace(/^\s*ERROR\s*/, "") : stderr;
  stdout = stdout ? stripAnsi(stdout).replace(/^\s*SUCCESS\s*/, "") : stdout;

  if (stdout) await window.showInformationMessage(stdout);
  if (stderr) await window.showErrorMessage(stderr);
}
