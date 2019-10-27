import { ExtensionContext, languages } from "vscode";
import {
  EdgeHoverProvider,
  EdgeLinkProvider,
import { EdgeHoverProvider, EdgeLinkProvider } from "./completion";
} from "./completion";

export function activate(context: ExtensionContext) {
  const edgeHover = languages.registerHoverProvider(
    ["edge"],
    new EdgeHoverProvider()
  );

  const edgeLink = languages.registerDocumentLinkProvider(
    ["edge"],
    new EdgeLinkProvider()
  );

  const edgeCompletion = languages.registerCompletionItemProvider(
    ["edge"],
    new EdgeCompletionProvider()
  );

  const linkProvider = new EdgeLinkProvider();
  let edgeLink = languages.registerDocumentLinkProvider(["edge"], linkProvider);
  );

  context.subscriptions.push(
    edgeHover,
    edgeLink,
  context.subscriptions.push(edgeHover, edgeLink);
  );
}

export function deactivate() {}
