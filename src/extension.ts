import { ExtensionContext } from 'vscode'
import Tasks from './tasks'

export function activate(context: ExtensionContext) {
	const tasks = Tasks()

	context.subscriptions.push(...tasks)
}

export function deactivate() {}
