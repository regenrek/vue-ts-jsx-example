'use strict'

const fs = require('fs')
const path = require('path')
const glob = require('glob')

const pathTargetIndexJs = path.resolve(__dirname, '../', 'index.js')

const pathVueComponentsRoot = path.resolve(__dirname, '..', 'components')
const pathsVueComponents = glob.sync('*/Nj*.vue', {
  cwd: pathVueComponentsRoot
})

function createIndexFiles() {
  const filesContent = generateFilesContent()
  saveIndexJs(filesContent.contentIndexJs)
  console.log('index.js created')
}

function generateFilesContent() {
  const imports = []
  const exports = []
  for (const pathComponentVue of pathsVueComponents) {
    const mjComponentName = pathComponentVue.replace(/.*\/(Nj.+)\.vue/, '$1')
    const importLine = `import ${mjComponentName} from './components/${pathComponentVue}'`
    imports.push(importLine)
    const exportLine = `  ${mjComponentName}`
    exports.push(exportLine)
  }

  // @TODO: Remove this !
  imports.push('import NjStep from \'./components/NjSteps/_sub/NjStep.vue\'')
  exports.push('  NjStep')

  imports.push('import { useStepWizard } from \'./composables/useStepWizard.js\'')
  exports.push('  useStepWizard')

  imports.push('import { useToggle } from \'./composables/useToggle.js\'')
  exports.push('  useToggle')

  imports.push('import { useId } from \'./composables/useId.js\'')
  exports.push('  useId')

  const contentIndexJs
    = `// Auto-generated file by create-index-files.js. Do not edit manually\n${
      imports.join('\n')
    }\n\n`
    + `export {\n${
      exports.join(',\n')
    }\n}\n`
  const contentJsJs = contentIndexJs.replace(/\.vue";/g, '.js";')

  return {
    contentIndexJs,
    contentJsJs
  }
}

function saveIndexJs(contentIndexJs) {
  fs.writeFileSync(pathTargetIndexJs, contentIndexJs)
}

module.exports = {
  createIndexFiles
}

if (require.main === module)
  createIndexFiles()
