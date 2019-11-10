import * as path from "path";
import * as assert from "assert";
import { Path } from "../../utilities/pathMatching";
import { workspace, WorkspaceFolder, MarkdownString, Uri } from "vscode";
import {
  getDocForMethodInFile,
  generateDocFromPath
} from "../../utilities/documentation";

suite("Autocomplete Markedown Documentation Generation", () => {
  setup(function() {
    const workspaceFolders = workspace.workspaceFolders as WorkspaceFolder[];
    this.workspace = workspaceFolders[0].uri.fsPath;
  });

  test("Test that documentation is returned for existing method in javascript file", function() {
    const file = path.resolve(
      this.workspace,
      "documentation/HomeController.js"
    );

    let documentation = getDocForMethodInFile(file, "store");
    assert.notEqual(documentation, null);

    documentation = documentation as MarkdownString;
    const found = documentation.value.indexOf("Store a new home object.") > -1;
    assert.deepEqual(found, true);
  });

  test("Test that documentation is not returned for methods that do not exist in javascript file", function() {
    const file = path.resolve(
      this.workspace,
      "documentation/HomeController.js"
    );

    let documentation = getDocForMethodInFile(file, "notExisting");
    assert.deepEqual(documentation, null);
  });

  test("Test that documentation is returned for existing method in typescript file", function() {
    const file = path.resolve(
      this.workspace,
      "documentation/PeopleController.ts"
    );

    let documentation = getDocForMethodInFile(file, "store");
    assert.notEqual(documentation, null);

    documentation = documentation as MarkdownString;
    const found =
      documentation.value.indexOf("Store a new people object.") > -1;
    assert.deepEqual(found, true);
  });

  test("Test that documentation is not returned for methods that do not exist in typescript file", function() {
    const file = path.resolve(
      this.workspace,
      "documentation/PeopleController.ts"
    );

    let documentation = getDocForMethodInFile(file, "notExisting");
    assert.deepEqual(documentation, null);
  });
});

suite("Autocomplete Plain String Documentation Generation", () => {
  test("Test that documentation generation from path is correct", () => {
    const path: Path = {
      fullpath: "me/resources/views/home.edge",
      name: "Home",
      uri: Uri.parse("~/me/resources/views/home.edge")
    };

    let documentation = generateDocFromPath(path);
    let actual = new MarkdownString(
      `\`Home\` [${path.fullpath}](${path.uri})  \r`
    );
    assert.deepEqual(documentation, actual);

    documentation = generateDocFromPath(path, false);
    actual = new MarkdownString(` [${path.fullpath}](${path.uri})  \r`);
    assert.deepEqual(documentation, actual);
  });

  test("Test that documentation is not generated for a file that doesn't exist", () => {
    const folder = workspace.workspaceFolders as WorkspaceFolder[];
    const workspacePath = folder[0].uri.fsPath;
    const file = path.resolve(
      workspacePath,
      "documentation/InvalidConroller.ts"
    );

    let documentation = getDocForMethodInFile(file, "store");
    assert.equal(documentation, null);
  });
});
