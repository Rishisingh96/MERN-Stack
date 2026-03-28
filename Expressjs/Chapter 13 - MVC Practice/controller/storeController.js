const Home = require("../models/homeModels");

exports.getIndex = (req, res, next) => {
  Home.find()((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.find()((registeredHomes) =>{
    res.render("store/home-list",{
      registeredHomes: registeredHomes, 
      pageTitle:"Home List", 
      currentPage:"Home",
    })
  })
};


exports.getBookings = (req, res) =>{
  res.render("store/bookings", {
    pageTitle: "My Booking", 
    currentPage: "bookings",
  })
};

exports.getFavouriteList = (req, res, next) => {
  Home.find()((registeredHomes) =>
    res.render("store/favourite-list", {
      registeredHomes: registeredHomes,
      pageTitle: "My Favourites",
      currentPage: "favourites",
    })
  );
};

