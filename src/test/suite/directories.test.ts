import * as assert from "assert";
import { workspace, WorkspaceFolder } from "vscode";
import { getDirectories } from "../../utilities/directory";

suite("Directory", () => {
  test("Test that all level one directory in a child directory are retrievied", () => {
    const folder = workspace.workspaceFolders as WorkspaceFolder[];
    const workspacePath = folder[0].uri.fsPath;

    const directories = getDirectories(workspacePath, ["directories"]);

    assert.deepStrictEqual(directories, [
      "directories",
      "directories/dir1",
      "directories/dir2",
      "directories/dir1/dir1.1",
      "directories/dir2/dir2.1"
    ]);
  });

  test("Test that no inner directory is returned for non-existing directory.", () => {
    const folder = workspace.workspaceFolders as WorkspaceFolder[];
    const workspacePath = folder[0].uri.fsPath;

    const directories = getDirectories(workspacePath, [
      "directories/fakeDirectory",
      "directories/fakeDirectory2"
    ]);

    assert.deepStrictEqual(directories, [
      "directories/fakeDirectory",
      "directories/fakeDirectory2"
    ]);
  });
});
