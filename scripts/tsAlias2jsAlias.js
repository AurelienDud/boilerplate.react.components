const path = require('path')

module.exports = function (src) {
  let alias = {}

  function sanitizeValue (value) {
    return value.replace('/*', '')
  }

  for (const name in src) {
    if (src.hasOwnProperty(name)) {
      // not sure webpack accept array of alias... doc and issues are unclear
      alias[sanitizeValue(name)] = path.join(process.cwd(), sanitizeValue(src[name][0]))
    }
  }

  return alias
}