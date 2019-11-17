import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

const runInstructions = new CommandSteps([
  {
    param: "directory",
    message: "Directory path for which to run instructions",
    type: DataType.String,
    optional: false,
    validateInput: InputValidation.notEmpty
  },
  {
    param: "as",
    message: "Name of the module",
    type: DataType.String,
    optional: true,
    validateInput: InputValidation.notEmpty
  }
]);

export default runInstructions;
