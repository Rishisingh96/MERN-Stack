function getLogin(req, res, next) {
    res.render("auth/login", {
        pageTitle: "Login",
        currentPage: "login",
        isLoggedIn: false
    });
}

function postLogin(req, res, next){

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
}

function postLogout(req, res, next) {
  console.log("Logg out...");
  req.session.destroy((err) => {
    if (err) {
      console.error('Session destroy error:', err);
      return next(err);
    }
    res.redirect("/login");
  });
}

module.exports = { getLogin, postLogin, postLogout };