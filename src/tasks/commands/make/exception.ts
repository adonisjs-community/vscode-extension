import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

const makeException = new CommandSteps([
  {
    param: "name",
    message: "Name of the exception",
    optional: false,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  }
]);

export default makeException;
