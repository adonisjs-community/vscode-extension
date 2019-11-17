import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeHook = new CommandSteps([
  {
    param: "name",
    message: "Name of the hook",
    optional: false,
    type: DataType.String
  },
  {
    param: "method",
    message: "The method to be created on hook",
    optional: true,
    type: DataType.String
  }
]);

export default makeHook;
