import fse from 'fs-extra'

export function isModeInstalled (appPaths, modeName) {
  return (
    modeName === 'spa' // always installed
    || fse.existsSync(appPaths[ `${ modeName }Dir` ])
  )
}
