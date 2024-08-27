const User = require("../../model/userModel");
const catchAsync = require("../../utils/catchAsync");
const { createSendToken } = require("./tokenUtils");

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  // Log the user in by sending the token
  createSendToken(newUser, 201, req, res);
});
