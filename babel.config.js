module.exports = {
  presets: [
    'vca-jsx',
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['emotion', { autoLabel: true }],
    ['babel-plugin-vue-tsx-functional/lib/plugin', { funcName: '_fc' }],
    'babel-plugin-vue-jsx-modifier',
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true
      }
    ]
  ]
}
