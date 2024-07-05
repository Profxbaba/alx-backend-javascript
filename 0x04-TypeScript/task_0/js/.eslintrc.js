module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended'
  ],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single']
  }
};
