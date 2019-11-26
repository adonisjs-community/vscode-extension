/**
 * Set of validation rules available to vscode vscode input component.
 */
class InputValidation {
  /**
   * Ensure that the input is not empty.
   *
   * @param value The current value of the input box.
   */
  public static notEmpty(value: string) {
    if (value.trim().length === 0) return `Input cannot be empty`;
  }
}

export default InputValidation;
