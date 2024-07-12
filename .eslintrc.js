module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb/hooks',
    'plugin:sonarjs/recommended',
    'prettier',
    '@react-native',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    Promise: false,
  },
  plugins: [
    'react',
    'react-native',
    'sonarjs',
    'jest',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    //general rules
    'no-debugger': 2,
    'no-console': 2,
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': 2,
    'react/no-unescaped-entities': 2,
    'prettier/prettier': 2,
    '@typescript-eslint/no-var-requires': 'off',
    //sonarqube rules setup
    'sonarjs/cognitive-complexity': 2,
    'sonarjs/no-identical-expressions': 2,
    'sonarjs/no-duplicate-string': 2,
    'sonarjs/no-duplicated-branches': 2,
    'sonarjs/no-nested-switch': 2,
    'sonarjs/no-collapsible-if': 2,
    'sonarjs/max-switch-cases': 2,
    'sonarjs/no-small-switch': 2,
    'sonarjs/no-redundant-boolean': 2,
    'sonarjs/prefer-single-boolean-return': 2,
    'sonarjs/no-all-duplicated-branches': 2,
    'sonarjs/no-one-iteration-loop': 2,
    'sonarjs/no-identical-functions': 2,
    'sonarjs/no-gratuitous-expressions': 2,
    'sonarjs/no-redundant-jump': 2,
    'sonarjs/prefer-object-literal': 2,
    'sonarjs/prefer-immediate-return': 2,
    'sonarjs/no-unused-collection': 2,
    'no-unsafe-optional-chaining': 2,
    'sonarjs/no-extra-arguments': 2,
    //react-hooks
    'react-hooks/exhaustive-deps': 2,
    //react native
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'no-async-promise-executor': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['preinstall.js'], // Add the path to your specific file or files
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
