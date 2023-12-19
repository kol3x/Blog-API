const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const passport = require("passport");

exports.index = asyncHandler(async (req, res, next) => {
  if (req.isAuthenticated()) {
    res.send("You are logged in. You are free to make new blog posts.");
  } else {
    res.send("You are not logged in. You are free to comment and read posts.");
  }
});

exports.login_get = asyncHandler(async (req, res, next) => {
  res.send("To login, send a POST request with your credentials to this route");
});

exports.login_post = [
  body("username").trim().isLength({ min: 1 }).escape(),
  body("password").isLength({ min: 4 }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(`FAILED. ERROR LOG: ${errors}`);
    } else {
      passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true,
      })(req, res, next);
    }
  }),
];
