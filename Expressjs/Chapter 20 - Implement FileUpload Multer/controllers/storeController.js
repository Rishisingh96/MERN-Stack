const Home = require("../models/home");
const User = require("../models/user")

exports.getIndex = (req, res, next) => {
  Home.find()
    .then((registeredHomes) => {
      res.render("store/index", {
        registeredHomes: registeredHomes,
        pageTitle: "airbnb Home",
        currentPage: "index",
         isLoggedIn: req.isLoggedIn,
         user: req.session.user,
      });
    })
    .catch((err) => {
      console.log("Error loading homes: ", err);
      next(err);
    });
};

exports.getHomes = (req, res, next) => {
  Home.find()
    .then((registeredHomes) => {
      res.render("store/home-list", {
        registeredHomes: registeredHomes,
        pageTitle: "Homes List",
        currentPage: "Home",
         isLoggedIn: req.isLoggedIn,
         user: req.session.user,
      });
    })
    .catch((err) => {
      console.log("Error loading homes: ", err);
      next(err);
    });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
     isLoggedIn: req.isLoggedIn,
     user: req.session.user,
  });
};

exports.getFavouriteList = async (req, res, next) => {

  const userId = req.session.user._id;
  const user = await User.findById(userId).populate('favourites');
  //we find all data of fav, populate use for fetch all data
  console.log("User: ", user);
    res.render("store/favourite-list", {
      favouriteHomes: user.favourites,
      pageTitle: "My Favourites",
      currentPage: "favourites",
       isLoggedIn: req.isLoggedIn,
       user: req.session.user,
    });
      // Favourite.find()
      // .populate('houseId')
      // .then((favourites) => {
      //   const favouriteHomes = favourites.map((fav) => fav.houseId);
        // res.render("store/favourite-list", {
        //   favouriteHomes: favouriteHomes,
        //   pageTitle: "My Favourites",
        //   currentPage: "favourites",
        //    isLoggedIn: req.isLoggedIn,
        //    user: req.session.user,
        // });
      // });
};

exports.postAddToFavourite = async (req, res, next) => {
  // Check if user is logged in
  if (!req.session.user) {
    // Return JSON response for AJAX requests
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      return res.status(401).json({ 
        success: false, 
        message: 'Please login to add favorites',
        requireLogin: true 
      });
    }
    // For regular form submissions, redirect to login with return URL
    return res.redirect('/login?returnUrl=' + encodeURIComponent(req.originalUrl));
  }

  const homeId = req.body.id;
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  
  if(!user.favourites.includes(homeId)){
    user.favourites.push(homeId);
    await user.save();
  }
  
  // Return JSON response for AJAX requests
  if (req.xhr || req.headers.accept.indexOf('json') > -1) {
    return res.json({ 
      success: true, 
      message: 'Added to favorites' 
    });
  }
  
  // For regular form submissions
  res.redirect("/favourites");
};

exports.postRemoveFromFavourite = async (req, res, next) => {
  // Check if user is logged in
  if (!req.session.user) {
    // Return JSON response for AJAX requests
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      return res.status(401).json({ 
        success: false, 
        message: 'Please login to remove favorites',
        requireLogin: true 
      });
    }
    // For regular form submissions, redirect to login
    return res.redirect('/login');
  }

  const homeId = req.params.homeId;
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  
  if(user.favourites.includes(homeId)){
    user.favourites = user.favourites.filter(fav => fav != homeId);
    await user.save();
  }
  
  // Return JSON response for AJAX requests
  if (req.xhr || req.headers.accept.indexOf('json') > -1) {
    return res.json({ 
      success: true, 
      message: 'Removed from favorites' 
    });
  }
  
  // For regular form submissions
  res.redirect("/favourites");
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
         isLoggedIn: req.isLoggedIn,
         user: req.session.user,
      });
    }
  });
};
