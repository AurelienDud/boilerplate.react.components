function getEnv () {
  var fromProcess = process.argv[process.argv.indexOf('--mode')] ? process.argv[process.argv.indexOf('--mode')+1] : undefined
  var fromNodeEnv = process.env.NODE_ENV
  var env = fromProcess || fromNodeEnv
  if (!env) {
    return null
  }
  return env.toLowerCase()
}

function isDev () {
  return getEnv() === 'development'
}

function isProd () {
  return getEnv() === 'production'
}

module.exports = {
  getEnv,
  isDev,
  isProd
}