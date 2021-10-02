module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: false,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'prefer-arrow',
    'jest-formatting',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:mocha/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-require-imports': ['warn'],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': ['warn'],
    'require-await': ['error'],
    'eol-last': ['error', 'always'],
    'mocha/no-mocha-arrows': ['warn'],
    'mocha/no-async-describe': ['warn'],
    'mocha/no-identical-title': ['warn'],
    'mocha/no-setup-in-describe': ['warn'],
    'mocha/no-hooks-for-single-case': 0,
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    '@typescript-eslint/ban-types': ['warn'],
    'jest-formatting/padding-around-describe-blocks': 'error',
    'jest-formatting/padding-around-test-blocks': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.spec.js'],
      rules: {
        'prefer-arrow/prefer-arrow-functions': 0,
        'prefer-arrow-callback': 0,
        'func-style': 0,
      },
    },
    {
      files: ['**/*/*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              //node imports
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              ],
              //side effect imports
              ['^\\u0000'],
              //anything starting with a letter
              ['^\\w'],
              // Anything not matched in another group.
              ['^'],
              // Anything that starts with a dot.
              ['^\\.'],
            ],
          },
        ],
      },
    },
  ],
};
