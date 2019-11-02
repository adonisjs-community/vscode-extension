// tslint:disable: curly
import {
  HoverProvider,
  TextDocument,
  Position,
  ProviderResult,
  Hover,
  MarkdownString
} from "vscode";
import Config from "../../../utilities/config";
import { getExactPathMatch } from "../../../utilities/pathMatching";
import {
  parseControllerString,
  Controller
} from "../../../utilities/controller";
import {
  getDocForMethodInFile,
  generateDocFromPath
} from "../../../utilities/documentation";

class RouteControllerHoverProvider implements HoverProvider {
  provideHover(doc: TextDocument, pos: Position): ProviderResult<Hover> {
    const regex = new RegExp(Config.autocomplete.controllersRegex);
    const range = doc.getWordRangeAtPosition(pos, regex);
    if (!range) return;

    const controller = parseControllerString(doc.getText(range));
    if (!controller) return;

    const markdown = this.generateHoverText(controller, doc);
    if (!markdown) return;

    return new Hover(markdown);
  }

  /**
   * Generate hover text for a controller.
   *
   * @param controller Controller to provide hover text for.
   * @param activeDocument Current active document where hover is triggered.
   */
  generateHoverText(
    controller: Controller,
    activeDocument: TextDocument
  ): MarkdownString | null {
    const config = Config.autocomplete;
    const controllerPath = getExactPathMatch(
      controller.name,
      activeDocument,
      config.controllersDirectories,
      config.controllersExtensions
    );

    if (controllerPath) {
      const path = controllerPath.uri.fsPath;
      const methodDoc = getDocForMethodInFile(path, controller.action);
      const markdown = methodDoc || generateDocFromPath(controllerPath);
      return markdown;
    }

    return null;
  }
}

export default RouteControllerHoverProvider;
