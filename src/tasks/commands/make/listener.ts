import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeListener = new CommandSteps([
  {
    param: "name",
    message: "Name of the listener",
    optional: false,
    type: DataType.String
  },
  {
    param: "method",
    message: "The method to be created on listener",
    optional: true,
    type: DataType.String
  }
]);

export default makeListener;
