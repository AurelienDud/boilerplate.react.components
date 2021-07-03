const tsConfig = require('./tsconfig.json')
const tsAlias2jsAlias = require('./scripts/tsAlias2jsAlias')

module.exports = {
  // aliases are defined in tsconfig.json
  // this is pretty ugly but:
  // this workflow expect to write aliases at (at least) 3 locations: tsconfig, webpack.config, .storybook/main
  // the runtime need a json tsconfig file and play with the runtime with a external library in not the better way
  // thanks webpack and storybook use js config file we can fix the problem with this path
  // and so be able to write aliases only one time and so keep a good maintainability
  alias: tsAlias2jsAlias(tsConfig.compilerOptions.paths)
}