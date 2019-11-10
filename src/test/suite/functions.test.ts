import {
  getMethodsInSourceFile,
  getLineNumber
} from "../../utilities/functions";
import { workspace, WorkspaceFolder } from "vscode";
import * as assert from "assert";
import * as path from "path";

suite("Autocomplete: Get All Functions In File", () => {
  setup(function() {
    const workspaceFolders = workspace.workspaceFolders as WorkspaceFolder[];
    this.workspace = workspaceFolders[0].uri.fsPath;
  });

  test("Test that all functions in a javascript file is returned", function() {
    const filePath = path.resolve(this.workspace, "functions/People.js");
    const functions = getMethodsInSourceFile(filePath);

    assert.deepEqual(functions, ["javascript", "a", "b", "c", "d"]);
  });

  test("Test that all functions in a typescript file is returned", function() {
    const filePath = path.resolve(this.workspace, "functions/Human.ts");
    const functions = getMethodsInSourceFile(filePath);

    assert.deepEqual(functions, ["a", "b", "helloWorld", "c"]);
  });

  test("Test that all no function is returned for an non-exsiting file", function() {
    const filePath = path.resolve(this.workspace, "functions/notExisting.ts");
    const functions = getMethodsInSourceFile(filePath);
    assert.deepStrictEqual(functions, []);
  });
});

suite("Autocomplete: Get Function Line Number", () => {
  setup(function() {
    const workspaceFolders = workspace.workspaceFolders as WorkspaceFolder[];
    this.workspace = workspaceFolders[0].uri.fsPath;
  });

  test("Test that line number is returned for method that exist in a javascript file", async function() {
    const method = "javascript";
    const filePath = path.resolve(this.workspace, "functions/People.js");
    const location = await getLineNumber(filePath, method);

    assert.deepEqual(location, {
      lineno: 5,
      name: method
    });
  });

  test("Test that line number is returned for method that exist in a typescript file", async function() {
    const method = "helloWorld";
    const filePath = path.resolve(this.workspace, "functions/Human.ts");
    const location = await getLineNumber(filePath, method);

    assert.deepEqual(location, {
      lineno: 12,
      name: method
    });
  });

  test("Test that line number is not returned for non-existing method in a javascript file", async function() {
    const method = "notExisitingMethod";
    const filePath = path.resolve(this.workspace, "functions/Human.ts");
    const location = await getLineNumber(filePath, method);

    assert.deepEqual(location, {
      lineno: -1,
      name: method
    });
  });

  test("Test that line number is not returned for non-existing method in a typescript file", async function() {
    const method = "notExisitingMethod";
    const filePath = path.resolve(this.workspace, "functions/Human.ts");
    const location = await getLineNumber(filePath, method);

    assert.deepEqual(location, {
      lineno: -1,
      name: method
    });
  });
});
