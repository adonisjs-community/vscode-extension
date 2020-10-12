import { DataType } from "../../types";
import { CommandSteps } from "../../types/commandSteps";
import InputValidation from "../../../utilities/inputValidation";

enum ClientType {
  NPM = "npm",
  Yarn = "yarn",
}

const build = new CommandSteps(
  "Compile typescript code to Javascript. Optionally watch for file changes",
  [
    {
      param: "watch",
      message: "Watch filesystem and re-compile changes",
      optional: true,
      type: DataType.Boolean,
    },
    {
      param: "production",
      message: "Build for production. This overrides watching.",
      optional: true,
      type: DataType.Boolean,
    },
    {
      param: "client",
      message:
        "Select the package manager to decide which lock file to copy to the build folder",
      optional: true,
      type: ClientType,
      default: ClientType.NPM,
    },
    {
      param: "poll",
      message:
        "Detect file changes by polling files instead of listening to filesystem events",
      optional: true,
      type: DataType.Boolean,
    },
  ]
);

export default build;
