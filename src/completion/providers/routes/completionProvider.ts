// tslint:disable: curly
import {
  TextDocument,
  Position,
  ProviderResult,
  CompletionItemProvider,
  CompletionItem,
  CompletionItemKind,
  workspace
} from "vscode";
import Config from "../../../utilities/config";
import {
  getSuggestions,
  Suggestion,
  toCompletionItems
} from "../../../utilities/suggestion";

class RouteControllerCompletionProvider implements CompletionItemProvider {
  provideCompletionItems(
    doc: TextDocument,
    pos: Position
  ): ProviderResult<CompletionItem[]> {
    const regex = new RegExp(
      Config.autocomplete.controllersCompletionRegex,
      "gi"
    );
    const range = doc.getWordRangeAtPosition(pos, regex);
    if (!range) return;
    const text = doc.getText(range);
    const suggestions = this.getSuggestions(text, doc);
    return toCompletionItems(suggestions, CompletionItemKind.Value);
  }

  /**
   * Get completion suggestions of controllers based on the provided text.
   *
   * @param text Text to get suggestions for
   * @param doc Document text belongs to
   */
  private getSuggestions(text: string, doc: TextDocument): Suggestion[] {
    const {
      controllersDirectories,
      controllersExtensions
    } = Config.autocomplete;

    const folder = workspace.getWorkspaceFolder(doc.uri);
    if (!folder) return [];

    let suggestions: Suggestion[] = [];

    getSuggestions(
      text,
      folder,
      controllersDirectories,
      controllersExtensions
    ).map(suggestion => {
      //
    });

    return suggestions;
  }
}

export default RouteControllerCompletionProvider;
