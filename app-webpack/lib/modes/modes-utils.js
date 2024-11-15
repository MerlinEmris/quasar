const fse = require('fs-extra')

module.exports.isModeInstalled = function isModeInstalled (appPaths, modeName) {
  return (
    modeName === 'spa' // always installed
    || fse.existsSync(appPaths[ `${ modeName }Dir` ])
  )
}
