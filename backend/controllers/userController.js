const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

//Register User
exports.registerUser = catchAsyncErrors(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profilepicUrl",
    },
  });
  const token = user.getJWTToken();
  res.status(201).json({ success: true, token });
});

//Login User

exports.LoginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  //checking if user has given correct password and email both
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isPasswordMatch = user.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const token = user.getJWTToken();
  res.status(200).json({
    success: true,
    token,
  });
});
