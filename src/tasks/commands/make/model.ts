import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeModel = new CommandSteps([
  {
    param: "name",
    message: "Name of the model",
    optional: false,
    type: DataType.String
  },
  {
    param: "migration",
    message: "Generate migration for the model",
    optional: true,
    type: DataType.Boolean
  },
  {
    param: "controller",
    message: "Generate resourceful controller for the model",
    optional: true,
    type: DataType.Boolean
  }
]);

export default makeModel;
