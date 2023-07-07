const express = require("express");
const router = express.Router();
const {
  registerUser,
  LoginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
} = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
module.exports = router;
