import Generate from "./keyGenerate";
import makeController from "./make/controller";
import makeModel from "./make/model";
import makeTrait from "./make/trait";
import makeView from "./make/view";
import makeMiddleware from "./make/middleware";
import makeCommand from "./make/command";
import makeException from "./make/exception";
import makeHook from "./make/hook";
import makeMigration from "./make/migration";
import makeListener from "./make/listener";
import makeProvider from "./make/provider";
import makeEhandler from "./make/exceptionHandler";
import makeSeed from "./make/seed";
import runInstructions from "./instructions";
import { createVscodeCommand as createCommand } from "../../utilities/command";
const VSCODE_COMMAND_BASE_NAME = "adonisjs";

const adonisCommands = {
  "key:generate": Generate,
  "make:controller": makeController,
  "make:model": makeModel,
  "make:trait": makeTrait,
  "make:view": makeView,
  "make:middleware": makeMiddleware,
  "make:command": makeCommand,
  "make:exception": makeException,
  "make:hook": makeHook,
  "make:migration": makeMigration,
  "make:listener": makeListener,
  "make:provider": makeProvider,
  "make:ehandler": makeEhandler,
  "make:seed": makeSeed,
  "run:instructions": runInstructions
};

export default Object.entries(adonisCommands).map(([key, steps]) => {
  return createCommand(key, steps, VSCODE_COMMAND_BASE_NAME);
});
