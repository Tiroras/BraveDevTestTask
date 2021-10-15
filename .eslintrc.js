module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "google"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        quotes: [
            'error',
            'single',
            {
              avoidEscape: true,
              allowTemplateLiterals: true,
            },
          ],
          'react/jsx-no-literals': 'off',
          'react-native/no-raw-text': 'off',
      
          'padding-line-between-statements': [
            'error',
            {
              blankLine: 'always',
              prev: '*',
              next: 'return',
            },
            {
              blankLine: 'always',
              prev: '*',
              next: 'case',
            },
            {
              blankLine: 'always',
              prev: '*',
              next: 'default',
            },
            {
              blankLine: 'always',
              prev: '*',
              next: 'block-like',
            },
          ],
          'prefer-const': ['error'],
          'simple-import-sort/imports': [
            'warn',
            {
              groups: [['^\\u0000'], ['^react', '^[^.]'], ['^src/'], ['^\\.']],
            },
          ],
      
          'max-lines': ['error', 500],
          'no-console': 'error',
          'object-shorthand': 'error',
          'no-unneeded-ternary': 'error',
          'no-nested-ternary': 'error',
          'newline-before-return': 'warn',
          semi: ['error', 'never'],
      
          // prettier
          'prettier/prettier': [
            'error',
            {
              trailingComma: 'all',
              semi: false,
              arrowParens: 'always',
              singleQuote: true,
              printWidth: 80,
              bracketSpacing: true,
            },
          ],
      
          'import/newline-after-import': 'error',
          'import/no-cycle': 'error',
          'import/no-unused-modules': 'error',
          'import/no-default-export': 'error',
      
          // react
          'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
          'react/sort-comp': 'warn',
      
          // promise
          // 'promise/prefer-await-to-then': 'warn',
          // 'promise/prefer-await-to-callbacks': 'warn',
      
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          'no-shadow': 'off',
          '@typescript-eslint/no-shadow': ['error'],
    }
};
