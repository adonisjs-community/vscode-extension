import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

const makeTrait = new CommandSteps("Make a new lucid trait", [
  {
    param: "name",
    message: "Name of the trait",
    optional: false,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  }
]);

export default makeTrait;
