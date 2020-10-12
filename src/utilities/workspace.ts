import { workspace, WorkspaceFolder, window } from "vscode";

export async function selectWorkspaceFolder(
  placeHolder: string
): Promise<WorkspaceFolder | null> {
  const workspaceFolders = workspace.workspaceFolders;
  if (!workspaceFolders) return null;
  if (workspaceFolders.length === 1) return workspaceFolders[0];

  const items = workspaceFolders.map((w) => w.name);
  const choice = await window.showQuickPick(items, { placeHolder });
  return workspaceFolders.find((w) => w.name === choice) || null;
}
