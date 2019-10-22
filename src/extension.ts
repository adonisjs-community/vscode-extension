import { ExtensionContext, languages } from "vscode";
import { EdgeHoverProvider } from "./completion";

export function activate(context: ExtensionContext) {
  const edgeHoverProvider = new EdgeHoverProvider();
  let edgeHover = languages.registerHoverProvider(["edge"], edgeHoverProvider);


  context.subscriptions.push(edgeHover);
}

export function deactivate() {}
