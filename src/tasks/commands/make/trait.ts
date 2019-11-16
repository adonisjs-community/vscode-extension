import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeTrait = new CommandSteps([
  {
    param: "name",
    default: null,
    message: "Name of the trait",
    optional: false,
    type: DataType.String
  }
]);

export default makeTrait;
