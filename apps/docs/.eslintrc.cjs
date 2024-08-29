/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/storybook.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
};
