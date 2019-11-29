import {
  Position,
  TextDocument,
  DocumentHighlight,
  DocumentHighlightProvider
} from "vscode";
import * as lst from "vscode-languageserver-types";
import * as html from "vscode-html-languageservice";
const HtmlService = html.getLanguageService();

class HtmlDocumentHighlight implements DocumentHighlightProvider {
  provideDocumentHighlights(
    document: TextDocument,
    position: Position
  ): DocumentHighlight[] | Thenable<DocumentHighlight[]> {
    const doc = lst.TextDocument.create(
      document.uri.fsPath,
      "html",
      1,
      document.getText()
    );

    return HtmlService.findDocumentHighlights(
      doc,
      position,
      HtmlService.parseHTMLDocument(doc)
    ) as any;
  }
}

export default HtmlDocumentHighlight;
