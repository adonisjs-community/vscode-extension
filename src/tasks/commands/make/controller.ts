import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

enum ControllerType {
  Http = "http",
  Websocket = "ws"
}

const makeController = new CommandSteps([
  {
    param: "name",
    message: "Name of the controller",
    optional: false,
    type: DataType.String,
    validateInput: InputValidation.notEmpty
  },
  {
    param: "resource",
    message: "Create resourceful methods on the controller?",
    optional: true,
    default: true,
    type: DataType.Boolean
  },
  {
    param: "type",
    message: "The type can be [http] or [ws]. Default is [http]",
    optional: true,
    default: ControllerType.Http,
    type: ControllerType
  }
]);

export default makeController;
