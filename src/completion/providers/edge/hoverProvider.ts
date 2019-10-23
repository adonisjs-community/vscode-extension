// tslint:disable: curly
import {
  HoverProvider,
  TextDocument,
  Position,
  ProviderResult,
  Hover
} from "vscode";
import Config from "../../../utilities/config";
import { getViewPath } from "../../../utilities/views";
import { generateMarkdownHoverText } from "../../../utilities/text";

class EdgeHoverProvider implements HoverProvider {
  provideHover(doc: TextDocument, pos: Position): ProviderResult<Hover> {
    const regex = new RegExp(Config.autocomplete.viewRegex);
    const range = doc.getWordRangeAtPosition(pos, regex);
    if (!range) return;

    const text = doc.getText(range);
    const matchedView = getViewPath(text, doc);

    if (matchedView) {
      const markdown = generateMarkdownHoverText([matchedView]);
      return new Hover(markdown);
    }
  }
}

export default EdgeHoverProvider;
