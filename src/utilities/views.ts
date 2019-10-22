// tslint:disable: curly
import { Uri, TextDocument, workspace as vsWorkspace } from "vscode";
import { getDirectories } from "./directory";
import Config from "./config";
import * as fs from "fs";

/**
 * A minimal file path representation.
 */
export type Path = {
  name: string;
  fullpath: string;
  uri: Uri;
};

/**
 * Get exact view file path whose name matches the text provided.
 *
 * @param text Name of file for which to match for file name.
 * @param doc Document from which text is extracted
 */
export function getViewPath(text: string, doc: TextDocument): Path | null {
  let paths = getViewPaths(text, doc);
  return paths.length > 0 ? paths[0] : null;
}

/**
 * Get all view file path whose names matches the text provided.
 *
 * @param text Name of file for which to match for file names
 * @param document Workspace directory to match files.
 */
export function getViewPaths(text: string, doc: TextDocument): Path[] {
  const workspace = vsWorkspace.getWorkspaceFolder(doc.uri);
  if (!workspace) return [];

  const workspacePath = workspace.uri.fsPath;
  const extensions = Config.autocomplete.extensions;
  const fileName = text.replace(/\"|\'/g, "").replace(/\./g, "/");
  const directories = getDirectories(workspacePath, Config.autocomplete.views);

  return buildViewPaths(workspacePath, directories, fileName, extensions);
}

function buildViewPaths(
  pwd: string,
  paths: string[],
  fileName: string,
  extensions: string[]
): Path[] {
  let result: Path[] = [];

  for (const path in paths) {
    for (let extension of extensions) {
      let fullpath = `${paths[path]}/${fileName}${extension}`;
      let filePath = `${pwd}/${fullpath}`;

      if (fs.existsSync(filePath)) {
        result.push({
          name: paths[path],
          fullpath: fullpath,
          uri: Uri.file(filePath)
        });
      }
    }
  }

  return result;
}
