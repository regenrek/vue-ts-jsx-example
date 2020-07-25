/* eslint-disable @typescript-eslint/no-var-requires */
const prism = require('markdown-it-prism')
const highlightLines = require('markdown-it-highlight-lines')
const linkAttributes = require('markdown-it-link-attributes')

require('prismjs/components/prism-typescript')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-json')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')
require('prismjs/components/prism-bash')

module.exports = ({ config }) => {
  // Remove SB's default vue-loader
  // config.module.rules = config.module.rules.filter(rule =>
  //   !(rule.test instanceof RegExp) || !rule.test.test('.vue')
  // )
  // config.module.rules = config.module.rules.filter(rule =>
  //   !(rule.test instanceof RegExp) || !rule.test.test('.css')
  // )
  // config.module.rules = config.module.rules.filter(rule =>
  //   !(rule.test instanceof RegExp) || !rule.test.test('.md')
  // )

  // console.log(config.module.rules)

  // config.module.rules.push({
  //   test: /\.vue$/,
  //   loader: 'vue-loader',
  //   options: {
  //     postcss: [
  //       require('postcss-import')(),
  //       require('postcss-nested')(),
  //       require('postcss-simple-vars')(),
  //       require('tailwindcss')(),
  //       require('autoprefixer')()
  //     ]
  //   }
  // })

  config.module.rules.push({
    test: /\.md$/,
    use: [
      {
        loader: require.resolve('markdown-it-loader'),
        options: {
          html: true,
          xhtmlOut: true,
          linkify: true,
          typographer: true,
          use: [
            prism,
            highlightLines,
            [
              linkAttributes,
              {
                pattern: /^https?:/,
                attrs: {
                  class: 'external-link',
                  target: '_blank'
                }
              }
            ]
          ]
        }
      },
      {
        loader: require.resolve('../scripts/typing-loader')
      }
    ]
  })

  // config.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   use: [
  //     {
  //       loader: require.resolve('babel-loader'),
  //       options: {
  //         presets: [
  //           '@babel/env',
  //           '@babel/typescript',
  //           '@vue/jsx'
  //         ]
  //       }
  //     }
  //   ]
  // })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      'babel-loader',
      {
        loader: 'ts-loader',
        options: { transpileOnly: true }
      }
    ],
    exclude: /node_modules/
  })

  config.module.rules.push({
    test: /\.postcss$/,
    use: [
      {
        loader: 'vue-style-loader'
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          /*
                Enable Source Maps
               */
          sourceMap: true,
          /*
                Set postcss.config.js config path && ctx
               */
          config: {
            path: './.storybook/'
          },
          plugins: [
            require('postcss-import'),
            require('postcss-nested'),
            require('postcss-simple-vars'),
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      }
    ]
  })

  // console.log('----------------------')

  // console.log(config.module.rules)

  config.resolve.extensions.push('.ts', '.tsx', '.vue', '.js', '.json')
  return config
}
