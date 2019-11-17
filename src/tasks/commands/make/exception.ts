import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeException = new CommandSteps([
  {
    param: "name",
    message: "Name of the exception",
    optional: false,
    type: DataType.String
  }
]);

export default makeException;
