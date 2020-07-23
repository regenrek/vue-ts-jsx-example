const path = require('path')
const fs = require('fs-extra')
const packages = require('./packages')
// const { importVue } = require('./import-vue')

const srcDir = path.resolve(__dirname, '../packages')
const packageFilepath = path.resolve(__dirname, '../package.json')

async function getVersion() {
  const raw = await fs.readFile(packageFilepath)
  return JSON.parse(raw).version
}

async function updateImport(targetVersion, packageVersion) {
  for (const [pkg] of packages) {
    const pkdDir = path.join(srcDir, pkg)

    // use<FunctionName>/index.ts create<FunctioName>/index.ts composable files
    const files = fs
      .readdirSync(pkdDir)
      .filter(f => f.startsWith('use') || f.startsWith('create'))
      .map((f) => {
        // import different script for vue2 and vue3, if avaliable
        if (fs.existsSync(path.join(pkdDir, f, `index.v${targetVersion}.ts`)))
          return path.join(f, `index.v${targetVersion}`)
        return f
      })
      .sort()

    // Nj<Component>/Nj<Component>.vue ui files
    const filesVue = fs
      .readdirSync(pkdDir)
      .filter(f => f.startsWith('Nj'))
      .map((f) => {
        // import different script for vue2 and vue3, if avaliable
        // if (fs.existsSync(path.join(pkdDir, f, `index.v${targetVersion}.ts`)))
        //   return path.join(f, `index.v${targetVersion}`)
        return f
      })
      .sort()

    let content = ''
    content += `export const version = '${packageVersion || await getVersion()}'\n\n`
    content += files.map(f => `export * from './${f}'\n`).join('')
    content += filesVue.map(f => `export * from './${f}'\n`).join('')
    // content += filesVue.map(f => `export * from './${f}/${f}.vue'\n`).join('')

    fs.writeFileSync(path.join(pkdDir, 'index.ts'), content)
  }
}

module.exports = { updateImport }

if (require.main === module)
  updateImport()
