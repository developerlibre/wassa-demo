// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ["eslint:all", "plugin:react/all", "standard"],
  // required to lint *.vue files
  plugins: [
    'react',
    'html'
  ],
  // add your custom rules here
  'rules': {
    'sort-imports' : 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'no-tabs': 1,
    'react/jsx-indent': [2, 2],
    'indent': 0,
    'react/jsx-max-depth': 0,
    'react/jsx-sort-props': 0,
    'capitalized-comments': 0,
    'multiline-comment-style': 0,
    'react/no-unused-state': 0,
    'quotes': 0,
    'react/prop-types': 0,
    'react/sort-comp': 0,
    'react/no-deprecated': 0,
    'react/jsx-no-bind': 0,
    'max-len': 0,
    'no-inline-comments': 0,
    'react/jsx-max-props-per-line': 0,
    'react/no-set-state': 0,
    'sort-keys': 0,
    'class-methods-use-this': 0,
    'react/forbid-component-props': 0,
    'func-style': [2, 'declaration', { 'allowArrowFunctions': true }],
    'max-lines-per-function': ['error', { 'max': 100 }],
    'no-underscore-dangle': 0,
    'react/jsx-no-target-blank': 0,
    'react/require-optimization': 0,
    'max-params': 0,
    'no-magic-numbers': 0,
    'no-console': 0,
    'line-comment-position': 0,
    'react/prefer-stateless-function': 0,
    'no-useless-constructor': 0,
    'multiline-ternary': 0,
    'no-ternary': 0,
    'react/destructuring-assignment': 0,
    'react/no-access-state-in-setstate': 0,
    'react/jsx-child-element-spacing': 0,
    'react/jsx-no-literals': 0,
    'react/no-unescaped-entities': 0,
    'linebreak-style': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'react/static-property-placement': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-props-no-spreading': 0,
    'require-unicode-regexp': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-curly-newline': 0,
  }
}
