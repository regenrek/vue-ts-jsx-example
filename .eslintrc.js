module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    // @todo make our own eslint-config-vue
    '@antfu/eslint-config-vue'
  ],
  plugins: [
    'markdown',
    'jest'
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/no-null': 'off',
    'unicorn/filename-case': 'off',
    'no-new': 'off',
    'import/order': 'off',
    'comma-dangle': ['error', 'never'],
    // 'no-unused-vars': ['error'],
    '@typescript-eslint/no-unused-vars': ['error']
  },
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ]
}
