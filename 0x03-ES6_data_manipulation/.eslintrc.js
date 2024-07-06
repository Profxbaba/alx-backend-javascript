module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-alert': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'linebreak-style': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'max-len': ['error', { code: 100 }],
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
  },
  overrides: [ // Added space here
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
  ], // Added trailing comma here
}; // Added trailing comma here if there are more properties to add in the future
