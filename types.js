const Common = require("./page-objects/common");
const Login = require("./page-objects/login");

// In JavaScript, there's no direct equivalent of TypeScript's `interface`.
// You can use JSDoc comments to document the expected shape of an object, if needed.

/**
 * @typedef {Object} PageObjects
 * @property {Common} common
 * @property {Login} login
 */

module.exports = {
  Common,
  Login,
};
