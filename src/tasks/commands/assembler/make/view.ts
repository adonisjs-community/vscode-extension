import { DataType } from "../../../types";
import { CommandSteps } from "../../../types/commandSteps";
import InputValidation from "../../../../utilities/inputValidation";

const makeTrait = new CommandSteps("Make a new view template", [
  {
    param: "name",
    message: "Name of the view",
    type: DataType.String,
    validateInput: InputValidation.notEmpty,
  },
]);

export default makeTrait;
