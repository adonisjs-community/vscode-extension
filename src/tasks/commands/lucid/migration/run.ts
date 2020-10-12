import { DataType } from '../../../types'
import { CommandSteps } from '../../../types/commandSteps'
import InputValidation from '../../../../utilities/inputValidation'

const migrationRun = new CommandSteps('Run pending migrations', [
	{
		param: 'connection',
		message: 'Define a custom database connection',
		type: DataType.String,
		optional: true,
		validateInput: InputValidation.notEmpty,
	},
	{
		param: 'force',
		message: 'Explictly force to run migrations in production',
		type: DataType.Boolean,
		optional: true,
	},
	{
		param: 'dryRun',
		message: 'Print SQL queries, instead of running the migrations',
		type: DataType.Boolean,
		optional: true,
	},
])

export default migrationRun
