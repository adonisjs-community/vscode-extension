import { DataType } from '../../../types'
import { CommandSteps } from '../../../types/commandSteps'
import InputValidation from '../../../../utilities/inputValidation'

const migrationRollback = new CommandSteps('Rollback migrations to a given batch number', [
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
	{
		param: 'batch',
		message: 'Define custom batch number for rollback. Use 0 to rollback to initial state',
		type: DataType.Integer,
		optional: true,
		validateInput: (input: string) => {
			const value = parseInt(input, 10)
			if (isNaN(value)) return 'Number is expected.'
			if (value < 0) return 'Number must be at least 0.'
		},
	},
])

export default migrationRollback
