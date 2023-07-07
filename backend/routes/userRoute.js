const express = require("express");
const router = express.Router();
const {
  registerUser,
  LoginUser,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");

router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);
module.exports = router;
