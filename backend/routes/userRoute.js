const express = require("express");
const router = express.Router();
const {
  registerUser,
  LoginUser,
  logout,
} = require("../controllers/userController");

router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);

router.route("/logout").get(logout);
module.exports = router;
