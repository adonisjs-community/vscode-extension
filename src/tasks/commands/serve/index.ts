import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const serve = new CommandSteps([
  {
    param: "dev",
    message: "Start development server",
    type: DataType.Boolean,
    default: null,
    optional: false
  },
  {
    param: "watch",
    message: "A custom set of only files to watch",
    type: DataType.String,
    default: null,
    optional: true
  }
]);

export default serve;
