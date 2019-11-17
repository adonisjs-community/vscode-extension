import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeSeeder = new CommandSteps([
  {
    param: "name",
    message: "Name of the seed file",
    optional: false,
    type: DataType.String
  }
]);

export default makeSeeder;
