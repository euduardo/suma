const checker = require("../checker");
const err = require("../errorCodes");

function url(value, options) {
  if (checker.isEmpty(value)) return null
  if (!checker.isString(value)) return { [err.invalidURL]: true }

  const result = checker.isValidURL(value,options)
  return result ? null: { [err.invalidURL]: true }
}

module.exports = url;
