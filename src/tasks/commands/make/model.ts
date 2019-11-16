import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const makeModel = new CommandSteps([
  {
    param: "name",
    default: null,
    message: "Name of the model",
    optional: false,
    type: DataType.String
  },
  {
    param: "migration",
    default: false,
    message: "Generate migration for the model",
    optional: true,
    type: DataType.Boolean
  },
  {
    param: "controller",
    default: false,
    message: "Generate resourceful controller for the model",
    optional: true,
    type: DataType.Boolean
  }
]);

export default makeModel;
