const glob = require("glob");
const { join, dirname } = require('path')

/**
 * Settings
 */
const defaultEntryName = 'main'

/**
 * Build entry object
 * @param {string} path
 * @param {string} dependOn
 * @returns {string}
 */
function buildEntryObject (path, dependOn) {
  let entryValue = path
  if (dependOn) {
    entryValue = {}
    entryValue.import = path
    entryValue.dependOn = dependOn
  }
  return entryValue
}

/**
 * to camelcase
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

/**
 * Name chunk according it's path
 * @param {string} path
 * @returns {string}
 */
function createChunkName (path) {
  let split = dirname(path).split('/')
  return camelize(split[split.length - 1])
}

/**
 * Generate entries from glob entry path
 * @param {string} path using glob
 * @param {string|null} dependOn
 * @returns {object}
 */
function generateEntries (path, dependOn = null) {
  // reject if bad arguments
  if (typeof path !== 'string' || (dependOn && typeof dependOn !== 'string')) return undefined

  // convert glob to real paths
  const truePath = glob.sync(join(process.cwd(), path))

  // reject if nothing targeted
  if (!truePath || truePath.length < 1) return undefined

  // create the final object
  let entries = {}

  // add entries points
  if (truePath.length === 1) {
    entries[defaultEntryName] = buildEntryObject(truePath[0], dependOn)
  } else {
    for (var i = 0; i < truePath.length; i++) {
      entries[createChunkName(truePath[i])] = buildEntryObject(truePath[i], dependOn)
    }
  }

  // return webpack entry config object
  return entries
}

module.exports = generateEntries