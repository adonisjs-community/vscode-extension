import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

const makeTrait = new CommandSteps([
  {
    param: "name",
    message: "Name of the view",
    optional: false,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  },
  {
    param: "layout",
    message: "Define a layout to extend",
    optional: true,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  }
]);

export default makeTrait;
