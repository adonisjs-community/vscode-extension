import * as assert from "assert";
import * as vscode from "vscode";
import { parseControllerString } from "../../utilities/controller";
// import * as myExtension from '../extension';

suite("Test that controller string are parseds", () => {
  test("Sample test", () => {
    const text = "HomeController";
    const controller = parseControllerString(text);
    assert.deepEqual(controller, {
      name: "HomeController",
      fullname: text,
      parentDirectory: "",
      fullPath: text,
      action: ""
    });
  });

  // test("Sample test", () => {
  //   const str = "HomeController.";
  //   parseControllerString();
  //   assert.equal(-1, [1, 2, 3].indexOf(5));
  //   assert.equal(-1, [1, 2, 3].indexOf(0));
  // });
  // test("Sample test", () => {
  //   const str = "HomeController.";
  //   parseControllerString();
  //   assert.equal(-1, [1, 2, 3].indexOf(5));
  //   assert.equal(-1, [1, 2, 3].indexOf(0));
  // });
});
