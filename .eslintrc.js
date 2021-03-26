module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    // "eslint:recommended",
    "prettier",
    // "prettier/vue",
    // "@vue/typescript",
  ],
  plugins: ["vue"],
};
