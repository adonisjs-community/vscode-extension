import { CommandStep, DataType } from ".";
import { window } from "vscode";

/**
 * Input recieved from a series of command steps executed.
 */
type CommandStepsInputs = {
  required: { [key: string]: any };
  optional: { [key: string]: any };
};

export class CommandSteps {
  /**
   * Create a new collection of command steps.
   */
  constructor(public steps: CommandStep[]) {}

  /**
   * Execute the series of command steps.
   */
  public async collectInputs(): Promise<CommandStepsInputs> {
    let params: CommandStepsInputs = {
      required: {},
      optional: {}
    };

    for (const step of this.steps) {
      let input = await this._collectInputByStepType(step);
      if (!input) throw Error;
      if (step.optional) params.optional[step.param] = input;
      else params.required[step.param] = input;
    }

    return params;
  }

  /**
   * Collect user input for a command step. Input type show to user, is
   * dependent on the type of the command step.
   *
   * @param step Command step to collect input for.
   */
  private async _collectInputByStepType(
    step: CommandStep
  ): Promise<string | boolean | undefined> {
    switch (step.type) {
      case DataType.String:
      case DataType.Integer:
        return this._collectInputForStringAndInteger(step);

      case DataType.Boolean:
        return this._collectInputForBoolean(step);

      default:
        return this._collectInputForEnum(step);
    }
  }

  /**
   * Collect user input for an command step expecting either a string or an
   * integer value.
   *
   * @param step Command step to collect input for.
   */
  private async _collectInputForStringAndInteger(
    step: CommandStep
  ): Promise<string | undefined> {
    return window.showInputBox({
      placeHolder: step.message,
      value: step.default === null ? "" : step.default.toString(),
      validateInput: (input: string) => {
        if (input.length === 0) return `Invalid value`;
      }
    });
  }

  /**
   * * Collect user input for an command step expecting a boolean value.
   *
   * @param step Command step to collect input for.
   */
  private async _collectInputForBoolean(step: CommandStep): Promise<boolean> {
    const items = ["Yes", "No"];
    const options = { placeHolder: step.message };
    const value = await window.showQuickPick(items, options);
    return value === "Yes";
  }

  /**
   * Collect user input for an command step expecting an enum value.
   *
   * @param step Command step to collect input for.
   */
  private async _collectInputForEnum(
    step: CommandStep
  ): Promise<string | undefined> {
    const items = Object.values(step.type);
    const options = { placeHolder: step.message };
    return window.showQuickPick(items, options);
  }
}
