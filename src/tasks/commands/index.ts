import { createVscodeCommand as createCommand } from '../../utilities/command'
const VSCODE_COMMAND_BASE_NAME = 'adonisjs'

// Assembler
import assemblerBuild from './assembler/build'
import assemblerInvoke from './assembler/invoke'
import assemblerMakeCommand from './assembler/make/command'
import assemblerMakeController from './assembler/make/controller'
import assemblerMakeException from './assembler/make/exception'
import assemblerMakeListener from './assembler/make/listener'
import assemblerMakeMiddleware from './assembler/make/middleware'
import assemblerMakePreloadFile from './assembler/make/preloadFile'
import assemblerMakeProvider from './assembler/make/provider'
import assemblerMakeValidator from './assembler/make/validator'
import assemblerMakeView from './assembler/make/view'

// Lucid
import lucidMigrationRollback from './lucid/migration/rollback'
import lucidMigrationRun from './lucid/migration/run'
import lucidMigrationStatus from './lucid/migration/status'
import lucidDbSeed from './lucid/db/seed'
import lucidMakeMigration from './lucid/make/migration'
import lucidMakeModel from './lucid/make/model'
import lucidMakeSeeder from './lucid/make/seeder'

const adonisCommands = {
	'build': assemblerBuild,
	'invoke': assemblerInvoke,
	'db:seed': lucidDbSeed,
	'make:command': assemblerMakeCommand,
	'make:controller': assemblerMakeController,
	'make:exception': assemblerMakeException,
	'make:listener': assemblerMakeListener,
	'make:middleware': assemblerMakeMiddleware,
	'make:prldfile': assemblerMakePreloadFile,
	'make:provider': assemblerMakeProvider,
	'make:validator': assemblerMakeValidator,
	'make:view': assemblerMakeView,
	'make:migration': lucidMakeMigration,
	'make:model': lucidMakeModel,
	'make:seed': lucidMakeSeeder,
	'migration:rollback': lucidMigrationRollback,
	'migration:run': lucidMigrationRun,
	'migration:status': lucidMigrationStatus,
}

export default Object.entries(adonisCommands).map(([key, steps]) => {
	return createCommand(key, steps, VSCODE_COMMAND_BASE_NAME)
})
