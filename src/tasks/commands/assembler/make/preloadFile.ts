import { DataType } from '../../../types'
import { CommandSteps } from '../../../types/commandSteps'
import InputValidation from '../../../../utilities/inputValidation'

enum Environment {
	Console = 'console',
	Web = 'web',
	Test = 'test',
}

const makeMiddleware = new CommandSteps(
	'Make a new preloaded file. Preloaded files are loaded automatically on boot',
	[
		{
			param: 'name',
			message: 'Name of the file',
			type: DataType.String,
			validateInput: InputValidation.notEmpty,
		},
		{
			param: 'environment',
			message: 'Explicitly define the environment in which you want to load this file',
			type: Environment,
			optional: true,
			isMultiChoice: true,
			default: Environment.Console,
			validateInput: (input: string[]) => {
				const envs = Object.values(Environment)
				const notExists = InputValidation.existsIn(input, envs)
				if (notExists) return notExists
			},
		},
	]
)

export default makeMiddleware
