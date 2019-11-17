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
    message: "Name of the middleware",
    optional: false,
    type: DataType.String
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
