module.exports = {
  root: true,

  extends: [
    'eslint:recommended',
    'quasar/base'
  ],

  overrides: [
    {
      files: [ '**/*.js' ],
      excludedFiles: [ 'bex/**' ],
      env: {
        es2022: true
        // es2023: true // node 22 and above
      },
      parserOptions: {
        ecmaVersion: '2022' // needs to be explicitly stated for some reason
      },
      extends: [
        'quasar/node'
      ]
    },

    {
      files: [ 'bex/**/*.js' ],
      parserOptions: {
        ecmaVersion: 'latest'
      },
      env: {
        browser: true,
        webextensions: true
      }
    }
  ],

  rules: {
    'no-useless-escape': 'off',
    'no-unused-vars': [ 'error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' } ]
  }
}
