import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

const makeHook = new CommandSteps([
  {
    param: "name",
    message: "Name of the hook",
    optional: false,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  },
  {
    param: "method",
    message: "The method to be created on hook",
    optional: true,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  }
]);

export default makeHook;
