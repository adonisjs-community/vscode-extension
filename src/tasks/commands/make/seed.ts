import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

const makeSeeder = new CommandSteps("Create a database seeder", [
  {
    param: "name",
    message: "Name of the seed file",
    optional: false,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  }
]);

export default makeSeeder;
