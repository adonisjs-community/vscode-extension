import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeListener = new CommandSteps([
  {
    param: "name",
    default: null,
    message: "Name of the listener",
    optional: false,
    type: DataType.String
  },
  {
    param: "method",
    default: null,
    message: "The method to be created on listener",
    optional: true,
    type: DataType.String
  }
]);

export default makeListener;
