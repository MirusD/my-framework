module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 'off',
    'indent': ['error', 2],
    'require-jsdoc': 'off',
    'operator-linebreak': 'off',
    'arrow-parens': 'off',
    'object-curly-spacing': 'off',
  },
}
