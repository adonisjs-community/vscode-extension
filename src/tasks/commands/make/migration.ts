import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

enum MigrationActionType {
  /**
   * Create table
   */
  Create = "create",

  /**
   * Select table
   */
  Select = "select"
}

const makeMigrations = new CommandSteps([
  {
    param: "name",
    message:
      "Name of migration file, current timestamp will be prepended to the name",
    optional: false,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  },
  {
    param: "action",
    message:
      "Choose an action to [create] or [select] a table. Default is [create]",
    optional: true,
    default: MigrationActionType.Create,
    type: MigrationActionType
  }
]);

export default makeMigrations;
