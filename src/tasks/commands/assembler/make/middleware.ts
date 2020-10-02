import { DataType } from "../../../types";
import { CommandSteps } from "../../../types/commandSteps";
import InputValidation from "../../../../utilities/inputValidation";

const makeMiddleware = new CommandSteps("Make a new middleware", [
  {
    param: "name",
    message: "Name of the middleware class",
    type: DataType.String,
    validateInput: InputValidation.notEmpty,
  },
]);

export default makeMiddleware;
