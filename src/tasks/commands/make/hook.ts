import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeHook = new CommandSteps([
  {
    param: "name",
    default: null,
    message: "Name of the hook",
    optional: false,
    type: DataType.String
  },
  {
    param: "method",
    default: null,
    message: "The method to be created on hook",
    optional: true,
    type: DataType.String
  }
]);

export default makeHook;
