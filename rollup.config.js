// rollup.config.js
import typescript from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify'
import dts from 'rollup-plugin-dts'
import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { DEFAULT_EXTENSIONS as babel_extensions } from '@babel/core'
import commonjs from 'rollup-plugin-commonjs'

const packages = require('./scripts/packages')
const configs = []

for (const [pkg, options] of packages) {
  const globals = {
    vue: 'Vue',
    'vue-demi': 'VueDemi',
    'vue-tsx-support': 'tsx',
    '@vue/runtime-dom': 'Vue',
    ...(options.globals || {})
  }
  const name = 'Nujek'

  configs.push({
    input: `packages/${pkg}/index.ts`,
    output: [
      {
        file: `dist/${pkg}/index.cjs.js`,
        format: 'cjs'
      },
      {
        file: `dist/${pkg}/index.esm.js`,
        format: 'es'
      },
      {
        file: `dist/${pkg}/index.umd.js`,
        format: 'umd',
        name,
        globals
      },
      {
        file: `dist/${pkg}/index.umd.min.js`,
        format: 'umd',
        name,
        globals,
        plugins: [
          uglify()
        ]
      }
    ],
    plugins: [
      resolve(),
      typescript({
        tsconfig: path.resolve(__dirname, 'tsconfig.rollup.json'),
        tsconfigOverride: {
          declaration: false,
          declarationDir: null,
          declarationMap: false
        }
      }),
      commonjs(),
      babel({
        extensions: [...babel_extensions, '.ts', '.tsx'],
        exclude: ['node_modules/**'],
        runtimeHelpers: true
      })
    ],
    external: [
      'vue-demi',
      'vue',
      '@vue/runtime-dom',
      'vue',
      'vue-property-decorator',
      'vue-class-component',
      'vue-tsx-support',
      ...(options.external || [])
    ]
  })

  configs.push({
    input: `./typings/${pkg}/index.d.ts`,
    output: {
      file: `dist/${pkg}/index.d.ts`,
      format: 'es'
    },
    plugins: [
      dts()
    ]
  })
}

export default configs
