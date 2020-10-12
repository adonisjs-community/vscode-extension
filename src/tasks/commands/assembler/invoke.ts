import { DataType } from '../../types'
import { CommandSteps } from '../../types/commandSteps'
import InputValidation from '../../../utilities/inputValidation'

const invoke = new CommandSteps('Invoke post install instructions on a given AdonisJS package', [
	{
		param: 'name',
		message: 'Name of the package for which to invoke post install instructions',
		type: DataType.String,
		validateInput: InputValidation.notEmpty,
	},
])

export default invoke
