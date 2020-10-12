import { DataType } from "../../../types";
import { CommandSteps } from "../../../types/commandSteps";
import InputValidation from "../../../../utilities/inputValidation";

const makeListener = new CommandSteps("Make a new event listener class", [
  {
    param: "name",
    message: "Name of the event listener class",
    type: DataType.String,
    validateInput: InputValidation.notEmpty,
  },
]);

export default makeListener;
