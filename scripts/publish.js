const exec = require('child_process').execSync
const path = require('path')
const packages = require('./packages')
const consola = require('consola')
const distDir = path.resolve(__dirname, '..', 'dist')

const { build } = require('./build')

async function publish() {
  await build()

  for (const [pkg] of packages) {
    const packageDist = path.join(distDir, pkg)

    const registry = 'http://172.104.140.27:4873'

    exec(`yarn publish --access public --non-interactive --registry ${registry}`, { stdio: 'inherit', cwd: packageDist })

    consola.success(`Published @nujek/${pkg}`)
  }
}

async function cli() {
  try {
    publish()
  }
  catch (e) {
    console.error(e)
    process.exit(1)
  }
}

module.exports = {
  publish
}

if (require.main === module)
  cli()
