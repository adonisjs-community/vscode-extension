import {
  TextDocument,
  ProviderResult,
  DocumentLink,
  DocumentLinkProvider,
  Uri
} from "vscode";
import { Config } from "../../../utilities";
import { RouteControllerLink } from "../../../utilities/controller";
import { getLineNumber } from "../../../utilities/functions";
import { createDocumentLinks } from "../../../utilities/links";

class RouteControllerLinkProvider implements DocumentLinkProvider {
  public provideDocumentLinks(
    doc: TextDocument
  ): ProviderResult<DocumentLink[]> {
    const config = Config.autocomplete;
    const docLinks: DocumentLink[] = [];

    return new Promise(async resolve => {
      if (config.quickJump) {
        let currentLine = 0;
        const regex = new RegExp(config.controllersRegex, "g");
        const maxLinesCount = getMaxLinesCount(doc);

        while (currentLine < maxLinesCount) {
          const links = await createDocumentLinks(
            regex,
            doc,
            currentLine,
            config.controllersDirectories,
            config.controllersExtensions
          );

          docLinks.push(...links);
          currentLine++;
        }
      }

      resolve(docLinks);
    });
  }

  public resolveDocumentLink(
    link: RouteControllerLink
  ): ProviderResult<DocumentLink> {
    let path = link.filePath.toString();
    const method = link.controller.method;

    return new Promise(async resolve => {
      const location = await getLineNumber(link.filePath.toString(), method);

      link.target = Uri.parse(
        location.lineno === -1 ? `${path}#1` : `${path}#${location.lineno}`
      );

      return resolve(link);
    });
  }
}

/**
 * Get the maximum line count to scan for a given document.
 *
 * @param doc Document to resolve line count
 */
function getMaxLinesCount(doc: TextDocument): number {
  const maxLinesCount = Config.autocomplete.maxLinesCount;
  return doc.lineCount <= maxLinesCount ? doc.lineCount : maxLinesCount;
}

export default RouteControllerLinkProvider;
