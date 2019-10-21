import { ExtensionContext, commands } from "vscode";

export function activate(context: ExtensionContext) {
  let disposable = commands.registerCommand("extension.helloWorld", () => {});
  // vscode.window.showInformationMessage("Hello World!");

  context.subscriptions.push(disposable);
}

export function deactivate() {}
