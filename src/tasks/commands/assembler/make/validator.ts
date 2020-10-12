import { DataType } from '../../../types'
import { CommandSteps } from '../../../types/commandSteps'
import InputValidation from '../../../../utilities/inputValidation'

const makeValidator = new CommandSteps('Make a new validator', [
	{
		param: 'name',
		message: 'Name of the validator class',
		type: DataType.String,
		validateInput: InputValidation.notEmpty,
	},
])

export default makeValidator
