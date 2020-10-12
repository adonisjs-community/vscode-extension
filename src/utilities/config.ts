import { workspace } from 'vscode'
import { CONFIG_NAME } from './constants'

/**
 * AdonisJS command task configuration.
 */
type TaskConfig = {
	/**
	 * Executable path for Adonis CLI.
	 */
	adonisExecutable: string

	/**
	 * Disable showing of prompts for optional fields. All commands will
	 * be ran with default values.
	 */
	disableOptionalValuePrompts: boolean

	/**
	 * Buffer size for stdout and stderr.
	 */
	maxBuffer: number
}

/**
 * A wrapper around vscode configuration for this extension
 */
class ConfigWrapper {
	/**
	 * Configuration for task related activities.
	 */
	public static get tasks(): TaskConfig {
		return workspace.getConfiguration(CONFIG_NAME).tasks
	}
}

export default ConfigWrapper
