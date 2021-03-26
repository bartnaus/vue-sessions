module.exports = {
  extends: ["stylelint-prettier/recommended"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "extends",
          "apply",
          // "tailwind",
          "components",
          "utilities",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
};
