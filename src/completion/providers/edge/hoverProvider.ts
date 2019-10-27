// tslint:disable: curly
import {
  HoverProvider,
  TextDocument,
  Position,
  ProviderResult,
  Hover
} from "vscode";
import Config from "../../../utilities/config";
import { getExactPathMatch } from "../../../utilities/pathMatching";
import { generateMarkdownHoverText } from "../../../utilities/text";

class EdgeHoverProvider implements HoverProvider {
  provideHover(doc: TextDocument, pos: Position): ProviderResult<Hover> {
    const config = Config.autocomplete;
    const regex = new RegExp(config.viewsRegex);
    const range = doc.getWordRangeAtPosition(pos, regex);
    if (!range) return;

    const text = doc.getText(range);
    const matchedView = getExactPathMatch(
      text,
      doc,
      config.viewsDirectories,
      config.viewsExtensions
    );

    if (matchedView) {
      const markdown = generateMarkdownHoverText([matchedView]);
      return new Hover(markdown);
    }
  }
}

export default EdgeHoverProvider;