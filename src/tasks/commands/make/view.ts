import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeTrait = new CommandSteps([
  {
    param: "name",
    default: null,
    message: "Name of the view",
    optional: false,
    type: DataType.String
  },
  {
    param: "layout",
    default: null,
    message: "Define a layout to extend",
    optional: true,
    type: DataType.String
  }
]);

export default makeTrait;
