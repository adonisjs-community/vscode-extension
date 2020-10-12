import { DataType } from '../../../types'
import { CommandSteps } from '../../../types/commandSteps'
import InputValidation from '../../../../utilities/inputValidation'

const migrationStatus = new CommandSteps('Check migrations current status', [
	{
		param: 'connection',
		message: 'Define a custom database connection',
		type: DataType.String,
		optional: true,
		validateInput: InputValidation.notEmpty,
	},
])

export default migrationStatus
