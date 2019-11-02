import { ExtensionContext, languages } from "vscode";
import {
  EdgeHoverProvider,
  EdgeLinkProvider,
  EdgeCompletionProvider,
  RouteCompletionProvider,
  RouteHoverProvider,
  RouteLinkProvider
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

  const routeCompletion = languages.registerCompletionItemProvider(
    ["javascript"],
    new RouteCompletionProvider()
  );

  const routeHover = languages.registerHoverProvider(
    ["javascript"],
    new RouteHoverProvider()
  );

  const routeLink = languages.registerDocumentLinkProvider(
    ["javascript"],
    new RouteLinkProvider()
  );

  context.subscriptions.push(
    edgeHover,
    edgeLink,
    edgeCompletion,
    routeCompletion,
    routeHover,
    routeLink
  );
}

export function deactivate() {}
