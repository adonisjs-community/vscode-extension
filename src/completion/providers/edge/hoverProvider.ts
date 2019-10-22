// tslint:disable: curly
import {
  HoverProvider,
  TextDocument,
  Position,
  ProviderResult,
  Hover,
  MarkdownString,
  workspace
} from "vscode";
import { REGEX_VIEW_INCLUDE } from "../../../utilities/constants";
import { getViewPaths, Path } from "../../../utilities/views";
import Config from "../../../utilities/config";

class EdgeHoverProvider implements HoverProvider {
  provideHover(doc: TextDocument, pos: Position): ProviderResult<Hover> {
    const regex = new RegExp(REGEX_VIEW_INCLUDE);
    const range = doc.getWordRangeAtPosition(pos, regex);
    if (!range) return;

    const text = doc.getText(range);
    const matchedViews = getViewPaths(text, doc);

    if (matchedViews.length > 0) {
      const markdown = generateMarkdownHoverText(matchedViews);
      return new Hover(markdown);
    }
  }
}

/**
 * Generate a markdown of all possible file paths provided.
 *
 * @param filePaths File paths to link hover text tp
 */
function generateMarkdownHoverText(filePaths: Path[]): MarkdownString {
  let text: string = "";

  for (const path of filePaths) {
    text += Config.folderTip ? `\`${path.name}\`` : "";
    text += ` [${path.fullpath}](${path.uri})  \r`;
  }

  return new MarkdownString(text);
}

export default EdgeHoverProvider;
