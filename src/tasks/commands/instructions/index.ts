import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const runInstructions = new CommandSteps([
  {
    param: "directory",
    message: "Directory path for which to run instructions",
    type: DataType.String,
    optional: false
  },
  {
    param: "as",
    message: "Name of the module",
    type: DataType.String,
    optional: true
  }
]);

export default runInstructions;
