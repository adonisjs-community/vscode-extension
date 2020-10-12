import { DataType } from '../../../types'
import { CommandSteps } from '../../../types/commandSteps'
import InputValidation from '../../../../utilities/inputValidation'

const makeController = new CommandSteps('Make a new HTTP controller', [
	{
		param: 'name',
		message: 'Name of the controller class',
		type: DataType.String,
		validateInput: InputValidation.notEmpty,
	},
	{
		param: 'resource',
		message: 'Create resourceful methods in the controller class?',
		optional: true,
		default: false,
		type: DataType.Boolean,
	},
])

export default makeController
