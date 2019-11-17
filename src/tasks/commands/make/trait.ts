import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

const makeTrait = new CommandSteps([
  {
    param: "name",
    message: "Name of the trait",
    optional: false,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  }
]);

export default makeTrait;
