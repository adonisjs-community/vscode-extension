import { DataType } from "../../../types";
import { CommandSteps } from "../../../types/commandSteps";
import InputValidation from "../../../../utilities/inputValidation";

const dbSeed = new CommandSteps("Execute database seeder files", [
  {
    param: "connection",
    message: "Define a custom database connection",
    type: DataType.String,
    optional: true,
    validateInput: InputValidation.notEmpty,
  },
  {
    param: "interactive",
    message: "Run seeders in interactive mode",
    type: DataType.Boolean,
    optional: true,
  },
  {
    param: "files",
    message:
      "Define a custom set of seeders files names to run (separated with comma)",
    type: DataType.Array,
    optional: true,
  },
]);

export default dbSeed;
