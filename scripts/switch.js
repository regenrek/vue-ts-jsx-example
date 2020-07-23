const path = require('path')
const assert = require('assert')
const fs = require('fs-extra')
const { selectVersion } = require('./selectVersion')
const { updateImport } = require('./import')

const srcDir = path.resolve(__dirname, '../packages')

async function backupApi() {
  try {
    await fs.copyFile(
      path.join(srcDir, 'api.ts'),
      path.join(srcDir, 'api.backup.ts')
    )
  }
  catch {}
}

async function restoreApi() {
  try {
    await fs.copyFile(
      path.join(srcDir, 'api.backup.ts'),
      path.join(srcDir, 'api.ts')
    )
    await fs.remove(
      path.join(srcDir, 'api.backup.ts')
    )
  }
  catch {}
}

async function switchApi(targetVersion, packageVersion) {
  assert([2, 3].includes(targetVersion))

  await fs.copyFile(
    path.join(srcDir, `api.${targetVersion}.ts`),
    path.join(srcDir, 'api.ts')
  )

  console.log('updateImport')
  await updateImport(targetVersion, packageVersion)
}

async function cli() {
  const version = await selectVersion()

  if (version) {
    console.log(`Switch api to ${version}.x`)
    await switchApi(version)
  }
}

module.exports = {
  switchApi,
  backupApi,
  restoreApi
}

if (require.main === module)
  cli()
