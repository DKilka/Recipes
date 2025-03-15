module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": "warn",
    "no-debugger": "warn",
    semi: ["error", "always"],
    quotes: ["error", "single"],
    eqeqeq: "error",
    curly: "error",
    "comma-dangle": ["error", "always-multiline"],
    indent: ["error", 2],
    "max-len": ["error", { code: 80 }],
    "no-trailing-spaces": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
