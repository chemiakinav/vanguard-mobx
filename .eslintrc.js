module.exports = {
  plugins: [ 'react', 'prettier' ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  globals: {
    $: true,
    require: true,
    process: true,
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        proseWrap: 'never',
        endOfLine: 'auto',
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
};

