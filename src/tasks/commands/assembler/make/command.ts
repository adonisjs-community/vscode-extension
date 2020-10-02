import { DataType } from "../../../types";
import { CommandSteps } from "../../../types/commandSteps";
import InputValidation from "../../../../utilities/inputValidation";

const makeCommand = new CommandSteps("Make a new ace command", [
  {
    param: "name",
    message: "Name of the command class",
    type: DataType.String,
    validateInput: InputValidation.notEmpty,
  },
]);

export default makeCommand;
