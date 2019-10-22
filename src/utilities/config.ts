import { workspace } from "vscode";
import { CONFIG_NAME } from "./constants";

export default workspace.getConfiguration(CONFIG_NAME);
