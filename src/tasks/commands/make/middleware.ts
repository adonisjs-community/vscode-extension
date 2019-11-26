import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

enum MiddlewareType {
  Http = "http",
  Websocket = "ws",
  Both = "both"
}

const makeMiddleware = new CommandSteps("Make a new HTTP or Ws Middleware", [
  {
    param: "name",
    message: "Name of the middleware",
    optional: false,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  },
  {
    param: "type",
    message: "The type can be [http], [ws] or [both]. Default is [http]",
    optional: true,
    default: MiddlewareType.Http,
    type: MiddlewareType
  }
]);

export default makeMiddleware;
