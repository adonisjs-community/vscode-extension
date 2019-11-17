import { CommandSteps } from "./commandSteps";

/**
 * Command step data type.
 */
export enum DataType {
  Integer = "integer",
  Boolean = "boolean",
  String = "string"
}

/**
 * Type representing any form of enum.
 */
type AnyEnumType = { [key: number]: string };

/**
 * A single cmmmand step that requires displayin a specific type of
 * input to recieve data from a user.
 */
export type CommandStep = {
  /**
   * Parameter name
   */
  param: string;

  /**
   * Message to show for this command step
   */
  message: string;

  /**
   * Data type of input to be inputed by user
   */
  type: DataType | AnyEnumType;

  /**
   * Default value for this command step input
   */
  default?: Object;

  /**
   * Is this paramter optional for the command
   */
  optional: boolean;

  /**
   * An optional function that will be called to validate input and to give a hint
   * to the user.
   *
   * @param value The current value of the input box.
   * @return A human readable string which is presented as diagnostic message.
   * Return `undefined`, `null`, or the empty string when 'value' is valid.
   */
  validateInput?(
    value: string
  ): string | undefined | null | Thenable<string | undefined | null>;
};

/**
 * A wrapper around the vscode command handler
 */
export type VscodeCommand = {
  key: string;
  description: string;
  steps: CommandSteps;
  handle: (compulsory: any, optional: any) => Promise<void>;
};

// export interface ICommand {
//   collectInputs(): Promise<CommandUserInput>;
// }

/**
 * A command step either to be executed directly on the terminal or
 * displaying series of input to recieve data from a user before executing.
 */
// export type CommandSteps<T extends ICommand> = T;
