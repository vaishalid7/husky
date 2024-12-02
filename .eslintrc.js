module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    project: ["./tsconfig.json"],
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "jest"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "plugin:jest/recommended"],
  rules: {
  },
};
