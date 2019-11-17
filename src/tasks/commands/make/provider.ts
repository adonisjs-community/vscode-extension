import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeProvider = new CommandSteps([
  {
    param: "name",
    message: "Name of the provider",
    optional: false,
    type: DataType.String
  }
]);

export default makeProvider;
