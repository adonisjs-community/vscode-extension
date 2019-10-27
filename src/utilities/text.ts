import { MarkdownString } from "vscode";
import { Path } from "./pathMatching";
import { Config } from ".";

/**
 * Generate a markdown of all possible file paths provided.
 *
 * @param filePaths File paths to link hover text tp
 */
export function generateMarkdownHoverText(filePaths: Path[]): MarkdownString {
  let text: string = "";

  for (const path of filePaths) {
    text += Config.folderTip ? `\`${path.name}\`` : "";
    text += ` [${path.fullpath}](${path.uri})  \r`;
  }

  return new MarkdownString(text);
}
