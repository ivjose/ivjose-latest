module.exports = {
  // ...
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // ...
    project: 'path/to/your/tsconfig.json',
    extraFileExtensions: ['.astro'], // This is a required setting in `@typescript-eslint/parser` v5.
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    // ...
  ],
  rules: {
    'prefer-const': 'off',
    'astro/no-conflict-set-directives': 'error',
    'astro/no-unused-define-vars-in-style': 'error',
  },
  // ...
};
