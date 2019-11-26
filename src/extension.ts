import { ExtensionContext, languages, DocumentFilter } from "vscode";
import {
  EdgeHoverProvider,
  EdgeLinkProvider,
  EdgeCompletionProvider,
  RouteCompletionProvider,
  RouteHoverProvider,
  RouteLinkProvider
} from "./completion";

import Tasks from "./tasks";

export function activate(context: ExtensionContext) {
  const jsAndTsSelector: Array<DocumentFilter> = [
    { scheme: "file", language: "javascript" },
    { scheme: "file", language: "typescript" }
  ];

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
    jsAndTsSelector,
    new RouteCompletionProvider()
  );

  const routeHover = languages.registerHoverProvider(
    jsAndTsSelector,
    new RouteHoverProvider()
  );

  const routeLink = languages.registerDocumentLinkProvider(
    jsAndTsSelector,
    new RouteLinkProvider()
  );

  const tasks = Tasks();

  context.subscriptions.push(
    edgeHover,
    edgeLink,
    edgeCompletion,
    routeCompletion,
    routeHover,
    routeLink,
    ...tasks
  );
}

export function deactivate() {}
