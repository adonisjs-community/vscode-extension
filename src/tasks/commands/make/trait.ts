import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeTrait = new CommandSteps([
  {
    param: "name",
    message: "Name of the trait",
    optional: false,
    type: DataType.String
  }
]);

export default makeTrait;
