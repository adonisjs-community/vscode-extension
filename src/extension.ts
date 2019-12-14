import {
  EdgeHoverProvider,
  EdgeLinkProvider,
  EdgeCompletionProvider,
  RouteCompletionProvider,
  RouteHoverProvider,
  RouteLinkProvider
} from "./completion";
import { EdgeFormatterProvider } from "./languages";
import { ExtensionContext, languages, DocumentFilter } from "vscode";
import Tasks from "./tasks";

export function activate(context: ExtensionContext) {
  const edgeSelector = { language: "edge", scheme: "file" };

  const jsAndTsSelector: Array<DocumentFilter> = [
    { scheme: "file", language: "javascript" },
    { scheme: "file", language: "typescript" }
  ];

  const edgeHover = languages.registerHoverProvider(
    edgeSelector,
    new EdgeHoverProvider()
  );

  const edgeLink = languages.registerDocumentLinkProvider(
    edgeSelector,
    new EdgeLinkProvider()
  );

  const edgeCompletion = languages.registerCompletionItemProvider(
    edgeSelector,
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

  const edgeFormatters = [
    languages.registerDocumentFormattingEditProvider(
      edgeSelector,
      new EdgeFormatterProvider()
    ),

    languages.registerDocumentRangeFormattingEditProvider(
      edgeSelector,
      new EdgeFormatterProvider()
    )
  ];

  const tasks = Tasks();
  context.subscriptions.push(
    edgeHover,
    edgeLink,
    edgeCompletion,
    routeCompletion,
    routeHover,
    routeLink,
    ...edgeFormatters,
    ...tasks
  );
}

export function deactivate() {}
