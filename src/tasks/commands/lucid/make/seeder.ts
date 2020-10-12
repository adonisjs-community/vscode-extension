import { DataType } from '../../../types'
import { CommandSteps } from '../../../types/commandSteps'
import InputValidation from '../../../../utilities/inputValidation'

const makeSeeder = new CommandSteps('Make a new Seeder file', [
	{
		param: 'name',
		message: 'Name of the seeder class',
		type: DataType.String,
		validateInput: InputValidation.notEmpty,
	},
])

export default makeSeeder
