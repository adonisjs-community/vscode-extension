import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

const makeListener = new CommandSteps("Make a new event or redis listener", [
  {
    param: "name",
    message: "Name of the listener",
    optional: false,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  },
  {
    param: "method",
    message: "The method to be created on listener",
    optional: true,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  }
]);

export default makeListener;
