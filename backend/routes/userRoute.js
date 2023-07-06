const express = require("express");
const router = express.Router();
const {
  registerUser,
  LoginUser,
  logout,
  forgotPassword,
} = require("../controllers/userController");

router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);
router.route("/password/forgot").post(forgotPassword);

router.route("/logout").get(logout);
module.exports = router;
