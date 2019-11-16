import { CommandStep, DataType } from ".";
import { window } from "vscode";

/**
 * Input recieved from a series of command steps executed.
 */
type CommandStepsInputs = {
  required?: { [key: string]: any };
  optional?: { [key: string]: any };
};

export class CommandSteps {
  _params: {
    required: { [key: string]: any };
    optional: { [key: string]: any };
  };

  /**
   * Create a new collection of command steps.
   */
  constructor(public steps: CommandStep[]) {
    this._params = { required: {}, optional: {} };
  }

  /**
   * Clear params previously recieved.
   */
  private _clearParams() {
    this._params.required = {};
    this._params.optional = {};
  }

  /**
   * Execute the series of sequential command.
   */
  public async collectInputs(): Promise<CommandStepsInputs> {
    this._clearParams();

    for (const step of this.steps) {
      switch (step.type) {
        case DataType.String:
        case DataType.Integer: {
          await this._collectInputForStringAndInteger(step);
          break;
        }
        case DataType.Boolean: {
          await this._collectInputForBoolean(step);
          break;
        }
        default: {
          await this._collectInputForEnum(step);
          break;
        }
      }
    }

    return this._params;
  }

  private async _collectInputForStringAndInteger(step: CommandStep) {
    const value = await window.showInputBox({
      placeHolder: step.message,
      value: step.default === null ? "" : step.default.toString(),
      validateInput: (input: string) => {
        if (input.length === 0) return `Invalid value`;
      }
    });
    this._setParam(step.param, value, step.optional);
  }

  private async _collectInputForBoolean(step: CommandStep) {
    const items = ["Yes", "No"];
    const options = { placeHolder: step.message };
    const value = await window.showQuickPick(items, options);
    this._setParam(step.param, value === "Yes", step.optional);
  }

  private async _collectInputForEnum(step: CommandStep) {
    const items = Object.values(step.type);
    const options = { placeHolder: step.message };
    const value = await window.showQuickPick(items, options);
    this._setParam(step.param, value, step.optional);
  }

  private _setParam(
    key: string,
    value: boolean | string | undefined,
    isOptional: boolean
  ) {
    if (!value) throw Error;
    if (isOptional) this._params.optional[key] = value;
    else this._params.required[key] = value;
  }
}
