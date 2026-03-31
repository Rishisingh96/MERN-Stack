const { check, validationResult } = require("express-validator");
const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false,
    errors: [],
    oldInput: { email: "" },
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "Sign Up",
    currentPage: "signup",
    isLoggedIn: false,
    errors: [],
    oldInput: { firstName: "", lastName: "", email: "", userType: "" },
  });
};

exports.postSignup = [
  //fistName validation
  check("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long")
    .matches(/^[A-Za-z]+$/)
    .withMessage("First name must contain only letters"),

  //lastName validation
  check("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters long")
    .matches(/^[A-Za-z]+$/)
    .withMessage("Last name must contain only letters"),

  //email validation
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),

  //password validation
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage(
      "Password must be at least 8 characters long and contain both letters and numbers",
    )
    .matches(/[A-Z]/)
    .withMessage("Password should contain atleast one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password should contain atleast one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password should contain atleast one number")
    .matches(/[!@&]/)
    .withMessage("Password should contain atleast one special character")
    .trim(),

  // Confirm password validation
  check("confirmPassword")
    .notEmpty()
    .withMessage("Please confirm your password")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),

  // Handle User type validation
  check("userType")
    .notEmpty()
    .withMessage("Please select a user type")
    .isIn(["guest", "host"])
    .withMessage("Invalid user type"),

  check("terms")
    .notEmpty()
    .withMessage("Please accept the terms and conditions")
    .custom((value, { req }) => {
      if (value !== "on") {
        throw new Error("Please accept the terms and conditions");
      }
      return true;
    }),

  (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: "Signup",
        currentPage: "signup",
        isLoggedIn: false,
        errors: errors.array().map((err) => err.msg),
        oldInput: { firstName, lastName, email, password, userType },
      });
    }

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      userType,
    });
    user
      .save()
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => {
        return res.status(422).render("auth/signup", {
          pageTitle: "Signup",
          currentPage: "signup",
          isLoggedIn: false,
          errors: [err.message],
          oldInput: { firstName, lastName, email, password, userType },
        }); 
      });
  },
]

// function postSignup(req, res, next) {
//   console.log("Signup data:", req.body);

//   // Example validation using express-validator
//   res.redirect("/login");
// }

exports.postLogin = (req, res, next) => {
  // res.cookie("isLoggedIn",true)
  // req.isLoggedin = true;

  req.session.isLoggedIn = true;

  // ✅ FORCE SAVE SESSION
  req.session.save((err) => {
    if (err) {
      console.log("Session Save Error:", err);
    }
    res.redirect("/");
  });
};

exports.postLogout = (req, res, next) => {
  console.log("Logg out...");
  req.session.destroy((err) => {
    if (err) {
      console.error("Session destroy error:", err);
      return next(err);
    }
    res.redirect("/login");
  });
};
