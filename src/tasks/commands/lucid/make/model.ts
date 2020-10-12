import { DataType } from "../../../types";
import { CommandSteps } from "../../../types/commandSteps";
import InputValidation from "../../../../utilities/inputValidation";

const makeModel = new CommandSteps("Make a new Lucid model", [
  {
    param: "name",
    message: "Name of the model class",
    type: DataType.String,
    validateInput: InputValidation.notEmpty,
  },
  {
    param: "migration",
    message: "Generate migration for the model",
    optional: true,
    type: DataType.Boolean,
  },
  {
    param: "controller",
    message: "Generate the controller for the model",
    optional: true,
    type: DataType.Boolean,
  },
]);

export default makeModel;
