import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

const makeProvider = new CommandSteps([
  {
    param: "name",
    message: "Name of the provider",
    optional: false,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  }
]);

export default makeProvider;
