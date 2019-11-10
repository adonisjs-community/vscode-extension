import * as assert from "assert";
import {
  parseControllerString,
  Controller,
  createControllerLink,
  RouteControllerLink
} from "../../utilities/controller";
import { Position, Uri, Range, workspace, WorkspaceFolder } from "vscode";
import * as path from "path";

suite("Parse route controller strings", () => {
  test("Test that controller string is parsed", () => {
    const text = "HomeController";
    const controller = parseControllerString(text);
    const path = {
      name: "Home",
      fullname: text,
      parentDirectory: "",
      fullPath: text,
      method: ""
    };

    assert.deepStrictEqual(path, controller);
  });

  test("Test that controller parent directory is parsed", () => {
    const text = "User/People/HomeController";
    const controller = parseControllerString(text);
    const path = {
      name: "Home",
      fullname: "User/People/HomeController",
      parentDirectory: "User/People/",
      fullPath: text,
      method: ""
    };

    assert.deepStrictEqual(path, controller);
  });

  test("Test that controller string without parent directory and method is parsed", () => {
    const text = "UserController.getProfile";
    const controller = parseControllerString(text);
    const path = {
      name: "User",
      fullname: "UserController",
      parentDirectory: "",
      fullPath: text,
      method: "getProfile"
    };

    assert.deepStrictEqual(path, controller);
  });

  test("Test that controller string with parent directory and method is parsed", () => {
    const text = "User/People/HomeController.me";
    const controller = parseControllerString(text);
    const path = {
      name: "Home",
      fullname: "User/People/HomeController",
      parentDirectory: "User/People/",
      fullPath: text,
      method: "me"
    };

    assert.deepStrictEqual(path, controller);
  });

  test("Test that controller string with trailing fullstop and no parent directory is parsed", () => {
    const text = "HomeController.";
    const controller = parseControllerString(text);
    const path = {
      name: "Home",
      fullname: "HomeController",
      parentDirectory: "",
      fullPath: text,
      method: ""
    };

    assert.deepStrictEqual(path, controller);
  });

  test("Test that controller string with parent directory and trailing fullstop is parsed", () => {
    const text = "User/People/HomeController.";
    const controller = parseControllerString(text);

    const path = {
      name: "Home",
      fullname: "User/People/HomeController",
      parentDirectory: "User/People/",
      fullPath: text,
      method: ""
    };

    assert.deepStrictEqual(path, controller);
  });

  test("Test that controller string without `controller` substring is parsed", () => {
    const text = "Home.";
    const controller = parseControllerString(text);
    const path = {
      name: "Home",
      fullname: "Home",
      parentDirectory: "",
      fullPath: text,
      method: ""
    };

    assert.deepStrictEqual(path, controller);
  });

  test("Test that controller string without `controller` substring and with parent directory is parsed", () => {
    const text = "Country/People/Home.";
    const controller = parseControllerString(text);
    const path = {
      name: "Home",
      fullname: "Country/People/Home",
      parentDirectory: "Country/People/",
      fullPath: text,
      method: ""
    };

    assert.deepStrictEqual(path, controller);
  });

  test("Test that controller without name is invalid", () => {
    const text = ".me";
    const controller = parseControllerString(text);
    assert.equal(controller, null);
  });
});

suite("Controller links", () => {
  setup(function() {
    const workspaceFolders = workspace.workspaceFolders as WorkspaceFolder[];

    this.userControllerPath = path.resolve(
      workspaceFolders[0].uri.fsPath,
      "controller/UserController.js"
    );
  });

  test("Test that controller link can be created", async function() {
    const start = new Position(0, 1);
    const end = new Position(0, 10);
    const range = new Range(start, end);

    const controller: any = parseControllerString("UserController.getUser");
    const file = Uri.parse(this.userControllerPath);
    const link: any = await createControllerLink(start, end, controller, file);
    const expected = new RouteControllerLink(range, file, controller);

    assert.deepStrictEqual(link, expected);
  });

  test("Test that controller link with incorrect controller method can be created", async function() {
    const start = new Position(0, 2);
    const end = new Position(0, 19);
    const range = new Range(start, end);

    const controller: any = parseControllerString(
      "UserController.__getNotExisting"
    );

    const file = Uri.parse(this.userControllerPath);
    const link: any = await createControllerLink(start, end, controller, file);
    const expected = new RouteControllerLink(range, file, controller);
    expected.target = Uri.parse(expected.filePath.fsPath.toString());

    assert.deepStrictEqual(link, expected);
  });

  test("Test that controller link is not created when fallback link is not enabled.", async function() {
    const start = new Position(0, 2);
    const end = new Position(0, 19);
    const range = new Range(start, end);

    const controller: any = parseControllerString(
      "UserController.__getNotExisting"
    );

    const file = Uri.parse(this.userControllerPath);
    const link = await createControllerLink(
      start,
      end,
      controller,
      file,
      false
    );
    assert.deepStrictEqual(link, null);
  });

  test("Test that controller link is created when controller method is not provided.", async function() {
    const start = new Position(0, 2);
    const end = new Position(0, 19);
    const range = new Range(start, end);

    const controller: any = parseControllerString("UserController.");
    const file = Uri.parse(this.userControllerPath);

    let link = await createControllerLink(start, end, controller, file);
    let expected = new RouteControllerLink(range, file, controller);
    expected.target = Uri.parse(expected.filePath.fsPath.toString());
    assert.deepStrictEqual(link, expected);

    link = await createControllerLink(start, end, controller, file, false);
    assert.deepStrictEqual(link, null);
  });

  test("Test that controller links with equal start and end position is invalid", async () => {
    const start = new Position(0, 0);
    const end = new Position(0, 0);

    const controller: Controller = {
      method: "me",
      fullPath: "HomeController.me",
      fullname: "HomeController",
      name: "Home",
      parentDirectory: ""
    };

    const path = Uri.parse("file://me/resources/views/HomeCotroller.js");
    const link = await createControllerLink(start, end, controller, path);
    assert.equal(link, null);
  });
});
