/**
 * Set of validation rules available to vscode vscode input component.
 */
class InputValidation {
  /**
   * Ensure that the input is not empty.
   *
   * @param value The current value of the input box.
   */
  public static notEmpty(value: string | string[]): string | undefined {
    const msg = "Input cannot be empty";

    if (
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    ) {
      return msg;
    }
  }

  /**
   * Ensure the given values exists in a haystack.
   *
   * @param needles Search values
   * @param haystack Haystack to search in.
   */
  public static existsIn(
    needles: string[],
    haystack: string[]
  ): string | undefined {
    for (const needle of needles) {
      if (!haystack.includes(needle)) {
        return `Invalid input ${needle}. Only "${haystack}" are allowed.`;
      }
    }
  }
}

export default InputValidation;
