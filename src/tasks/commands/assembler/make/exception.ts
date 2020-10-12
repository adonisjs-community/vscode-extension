import { DataType } from '../../../types'
import { CommandSteps } from '../../../types/commandSteps'
import InputValidation from '../../../../utilities/inputValidation'

const makeException = new CommandSteps('Make a new exception handle', [
	{
		param: 'name',
		message: 'Name of the exception class',
		type: DataType.String,
		validateInput: InputValidation.notEmpty,
	},
	{
		param: 'selfHandle',
		message: 'Add handle method to self handle the exception?',
		default: false,
		optional: true,
		type: DataType.Boolean,
	},
])

export default makeException
