import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeCommand = new CommandSteps([
  {
    param: "name",
    default: null,
    message: "Name of the command",
    optional: false,
    type: DataType.String
  }
]);

export default makeCommand;
