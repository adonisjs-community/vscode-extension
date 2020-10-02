import { DataType } from "../../../types";
import { CommandSteps } from "../../../types/commandSteps";
import InputValidation from "../../../../utilities/inputValidation";

const makeMigrations = new CommandSteps("Create a new migration file", [
  {
    param: "name",
    message: "Name of migration file",
    type: DataType.String,
    validateInput: InputValidation.notEmpty,
  },
  {
    param: "connection",
    message: "Define a custom database connection for the migration",
    type: DataType.String,
    optional: true,
    validateInput: InputValidation.notEmpty,
  },
  {
    param: "folder",
    message: "Pre-select a migration directory",
    type: DataType.String,
    optional: true,
    validateInput: InputValidation.notEmpty,
  },
  {
    param: "create",
    message: "Define the table name for creating a new table",
    type: DataType.String,
    optional: true,
    validateInput: InputValidation.notEmpty,
  },
  {
    param: "table",
    message: "Define the table name for altering an existing table",
    type: DataType.String,
    optional: true,
    validateInput: InputValidation.notEmpty,
  },
]);

export default makeMigrations;
