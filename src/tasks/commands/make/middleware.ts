import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

enum MiddlewareType {
  Http = "http",
  Websocket = "ws",
  Both = "both"
}

const makeMiddleware = new CommandSteps([
  {
    param: "name",
    default: null,
    message: "Name of the middleware",
    optional: false,
    type: DataType.String
  },
  {
    param: "type",
    default: MiddlewareType.Http,
    message: "The type can be [http], [ws] or [both]",
    optional: true,
    type: MiddlewareType
  }
]);

export default makeMiddleware;
