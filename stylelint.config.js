module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-prettier',
  ],
  customSyntax: 'postcss-html',
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-class-pattern': null,
    'selector-pseudo-element-no-unknown': null,
  },
}
