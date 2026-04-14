// External Module
const express = require("express");
const authRouter = express.Router();

//Local Modules
const { getLogin, postLogin, postLogout, getSignup, postSignup } = require("../controllers/authController");

authRouter.get("/login", getLogin);
authRouter.post("/login", postLogin);
authRouter.get("/logout", postLogout);
authRouter.get("/signup", getSignup);
authRouter.post("/signup", postSignup);

module.exports = authRouter;