module.exports = {
  rules: {
    // 'no-undef': 'off',
    // 'react/prop-types': 0,
    // 'react/display-name': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'off',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    // 'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // 'plugin:import/typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  //   settings: {
  //     react: {
  //       pragma: 'React',
  //       version: 'detect',
  //     },
  //   },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
};
