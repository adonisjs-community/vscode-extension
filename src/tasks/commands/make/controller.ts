import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

enum ControllerType {
  Http = "http",
  Websocket = "ws"
}

const makeController = new CommandSteps([
  {
    param: "name",
    default: null,
    message: "Name of the controller",
    optional: false,
    type: DataType.String
  },
  {
    param: "resource",
    default: false,
    message: "Create resourceful methods on the controller?",
    optional: true,
    type: DataType.Boolean
  },
  {
    param: "type",
    default: ControllerType.Http,
    message: "The type can be [http] or [ws]",
    optional: true,
    type: ControllerType
  }
]);

export default makeController;
