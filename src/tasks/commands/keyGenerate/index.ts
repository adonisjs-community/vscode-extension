import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";

const keyGenerate = new CommandSteps([
  {
    param: "force",
    message: "Forcefully generate the key in production enviroment",
    optional: true,
    type: DataType.Boolean
  },
  {
    param: "env",
    message: ".env file location",
    optional: true,
    type: DataType.String
  },
  {
    param: "size",
    message: "The key size which defaults to 32 characters",
    optional: true,
    type: DataType.Integer
  },
  {
    param: "echo", // This would console.log to the in-built console
    message: "Echo the key instead of writing to the file",
    optional: true,
    type: DataType.Boolean
  }
]);

export default keyGenerate;
