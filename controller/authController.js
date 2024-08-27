const login = require("./auth/login");
const signup = require("./auth/signup");
const forgotPassword = require("./auth/forgotPassword");
const logout = require("./auth/logout");
const resetPassword = require("./auth/resetPassword");
const updatePassword = require("./auth/updatePassword");
const { protect, isLoggedIn, restrictTo } = require("./auth/protectionUtils");

module.exports = {
  login: login.login,
  signup: signup.signup,
  forgotPassword: forgotPassword.forgotPassword,
  logout: logout.logout,
  resetPassword: resetPassword.resetPassword,
  updatePassword: updatePassword.updatePassword,
  protect,
  isLoggedIn,
  restrictTo,
};
