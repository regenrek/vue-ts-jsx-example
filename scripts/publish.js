const exec = require('child_process').execSync
const assert = require('assert')
const path = require('path')
const { buildFor } = require('./build')
const packages = require('./packages')
const { selectVersion } = require('./selectVersion')
const consola = require('consola')

const distDir = path.resolve(__dirname, '..', 'dist')

async function publishFor(targetVueVersion) {
  assert([2, 3].includes(targetVueVersion))

  await buildFor(targetVueVersion, async(targetVersion, packageVersion) => {
    consola.info(`Publish for Vue ${targetVueVersion}.x`)

    // @TODO Make this configurable
    const registry = 'http://172.104.140.27:4873'

    for (const [pkg] of packages) {
      const packageDist = path.join(distDir, pkg)

      if (targetVueVersion === 3) {
        exec(`npm publish --tag next --registry ${registry}`, { stdio: 'inherit', cwd: packageDist })
        exec(`npm dist-tag add @nujek/${pkg}@${packageVersion} vue3`, { stdio: 'inherit', cwd: packageDist })
      }

      if (targetVueVersion === 2) {
        exec(`npm publish --registry ${registry}`, { stdio: 'inherit', cwd: packageDist })
        exec(`npm dist-tag add @nujek/${pkg}@${packageVersion} vue2`, { stdio: 'inherit', cwd: packageDist })
      }

      consola.success(`Published @nujek/${pkg} for Vue ${targetVueVersion}.x`)
    }
  })
}

async function publishAll() {
  await publishFor(2)
  await publishFor(3)
}

async function cli() {
  try {
    const version = await selectVersion()
    if (version)
      await publishFor(version)
    else if (version === 0)
      await publishAll()
  }
  catch (e) {
    console.error(e)
    process.exit(1)
  }
}

module.exports = {
  publishFor
}

if (require.main === module)
  cli()
