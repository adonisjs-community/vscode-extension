import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const runInstructions = new CommandSteps([
  {
    param: "module",
    message: "Npm module name",
    type: DataType.String,
    default: null,
    optional: false
  },
  {
    param: "as",
    message:
      "Name of the module, required when installing from github or local file system",
    type: DataType.String,
    default: null,
    optional: true
  },
  {
    param: "yarn",
    message: "Use yarn over npm for installation",
    type: DataType.Boolean,
    default: false,
    optional: true
  },
  {
    param: "cnpm",
    message: "Use cnpm over npm for installation",
    type: DataType.Boolean,
    default: false,
    optional: true
  },
  {
    param: "skipInstructions",
    message: "Do not run post install instructions",
    type: DataType.Boolean,
    default: false,
    optional: true
  },
  {
    param: "raw",
    message: "Disable animation and colored output",
    type: DataType.Boolean,
    default: false,
    optional: true
  }
]);

export default runInstructions;
