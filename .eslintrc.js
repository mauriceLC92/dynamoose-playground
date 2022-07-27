module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  env: { jest: true, browser: true, node: true },
  rules: {
    "@typescript-eslint/no-use-before-define": ["error", { "functions": false }],
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "no-useless-constructor": 0,
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-interface": 0,
  },
};
