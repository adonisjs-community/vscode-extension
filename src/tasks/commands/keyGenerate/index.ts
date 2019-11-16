import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const keyGenerate = new CommandSteps([
  {
    param: "force",
    default: false,
    message: "Forcefully generate the key in production enviroment",
    optional: true,
    type: DataType.Boolean
  },
  {
    param: "env",
    default: null,
    message: ".env file location",
    optional: true,
    type: DataType.String
  },
  {
    param: "size",
    default: null, // fallbacks to AdonisCLI default
    message: "The key size which defaults to 32 characters",
    optional: true,
    type: DataType.Integer
  },
  {
    param: "echo", // This would console.log to the in-built console
    default: null,
    message: "Echo the key instead of writing to the file",
    optional: true,
    type: DataType.Boolean
  }
]);

export default keyGenerate;
