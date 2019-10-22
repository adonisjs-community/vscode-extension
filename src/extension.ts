import { ExtensionContext, languages } from "vscode";
import { EdgeHoverProvider, EdgeLinkProvider } from "./completion";

export function activate(context: ExtensionContext) {
  const edgeHoverProvider = new EdgeHoverProvider();
  let edgeHover = languages.registerHoverProvider(["edge"], edgeHoverProvider);

  const linkProvider = new EdgeLinkProvider();
  let edgeLink = languages.registerDocumentLinkProvider(["edge"], linkProvider);

  context.subscriptions.push(edgeHover, edgeLink);
}

export function deactivate() {}
