module.exports = {
   env: {
      browser: true,
      es2021: true,
      jest: true,
   },
   extends: [
      'plugin:react/recommended',
      'airbnb',
      'prettier',
      'plugin:storybook/recommended',
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: [
      'react',
      '@typescript-eslint',
      'i18next',
      'react-hooks',
      'unused-imports',
      'stil-plugin-paths',
   ],
   rules: {
      'react/jsx-filename-extension': [
         2,
         {
            extensions: ['.js', '.jsx', '.tsx'],
         },
      ],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'off',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
      'i18next/no-literal-string': [
         'error',
         {
            markupOnly: true,
            ignoreAttribute: [
               'data-testid',
               'to',
               'target',
               'justify',
               'align',
               'direction',
               'gap',
               'role',
               'as',
               'border',
               'feature',
            ],
         },
      ],
      'max-len': ['error', { ignoreComments: true, code: 120 }],
      'react-hooks/exhaustive-deps': [
         'error',
         {
            additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)',
         },
      ],
      'no-param-reassign': 'off',
      'no-undef': 'off',
      'react/no-array-index-key': 'off',

      'unused-imports/no-unused-imports': 'error',
      'react/no-unstable-nested-components': 1,
      'stil-plugin-paths/path-checker': [
         'error',
         {
            alias: '@',
         },
      ],
      'stil-plugin-paths/public-api-imports': [
         'error',
         {
            alias: '@',
            testFilesPatterns: [
               '**/*.test.*',
               '**/*.story.*',
               '**/StoreDecorator.tsx',
            ],
         },
      ],
      'stil-plugin-paths/layer-imports': [
         'error',
         {
            alias: '@',
            ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
         },
      ],
   },
   globals: {
      __IS_DEV__: true,
      __API__: true,
      __PROJECT__: true,
   },
   overrides: [
      {
         files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
         rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
         },
      },
   ],
};
