import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeTrait = new CommandSteps([
  {
    param: "name",
    message: "Name of the view",
    optional: false,
    type: DataType.String
  },
  {
    param: "layout",
    message: "Define a layout to extend",
    optional: true,
    type: DataType.String
  }
]);

export default makeTrait;
