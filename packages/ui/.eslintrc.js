/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true, // Agrega esta línea
  },
  extends: ["@repo/eslint-config/react.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  ignorePatterns: ["tsup.config.ts"]
};
