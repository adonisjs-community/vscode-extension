import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const runInstructions = new CommandSteps([
  {
    param: "directory",
    message: "Directory path for which to run instructions",
    type: DataType.String,
    default: null,
    optional: false
  },
  {
    param: "as",
    message: "Name of the module",
    type: DataType.String,
    default: null,
    optional: true
  }
]);

export default runInstructions;
