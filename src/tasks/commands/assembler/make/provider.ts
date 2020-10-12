import { DataType } from '../../../types'
import { CommandSteps } from '../../../types/commandSteps'
import InputValidation from '../../../../utilities/inputValidation'

const makeProvider = new CommandSteps('Make a new IoC container provider', [
	{
		param: 'name',
		message: 'Name of the provider class',
		type: DataType.String,
		validateInput: InputValidation.notEmpty,
	},
	{
		param: 'ace',
		message: 'Registers provider under the ace providers array',
		optional: true,
		type: DataType.Boolean,
	},
])

export default makeProvider
