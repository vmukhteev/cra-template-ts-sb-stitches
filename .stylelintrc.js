module.exports = {
  plugins: ["stylelint-scss", "stylelint-prettier"],
  processors: [],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    "stylelint-config-recommended-scss"
  ],
  rules: {
    'prettier/prettier': true,
    'no-descending-specificity': [false, {}],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['font-icon'],
      },
    ],
  },
};
