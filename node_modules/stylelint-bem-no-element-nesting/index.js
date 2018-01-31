var stylelint = require("stylelint");
var styleSearch = require('style-search');

var ruleName = "tmi/bem-no-element-nesting"

module.exports = stylelint.createPlugin(ruleName, function (enabled) {
  return function (root, result) {
    var validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: enabled,
      possible: [true, false]
    })

    if (!validOptions) { return }

    var regexTest = /__([a-zA-Z0-9]+)__/;

    root.walkRules(function (statement) {
      if (regexTest.test(statement.toString())) {
        stylelint.utils.report({
          ruleName: ruleName,
          result: result,
          node: statement,
          message: 'Sub-elements should not use a nested class structure in the BEM syntax. For example, use "search-form__field-label" not "search-form__field__label". This allows you to change the markup without needing to modify class name hierarchy.'
        });
      }
    })
  }
})

module.exports.ruleName = ruleName
