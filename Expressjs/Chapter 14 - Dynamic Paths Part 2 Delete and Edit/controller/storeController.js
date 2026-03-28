const Favourites = require("../models/favouritesModels");
const Home = require("../models/homeModels");

exports.getIndex = (req, res, next) => {
  Home.find()((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    }),
  );
};

exports.getHomes = (req, res, next) => {
  Home.find()((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Home List",
      currentPage: "Home",
    });
  });
};

exports.getBookings = (req, res) => {
  res.render("store/bookings", {
    pageTitle: "My Booking",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourites.getFavourite(favourites => {
    Home.find()((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id));
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      })
    });
  })
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourites.deleteHomeFById(homeId, error => {
    if (error) {
      console.log('Error while removing from Favourite', error);
    }
    res.redirect("/favourites");
  })
}


exports.getHomeDetails = (req, res) => {
  const homeId = req.params.homeId;
  console.log("At hoem details page", homeId);
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found..");
      res.redirect("/homes");
    } else {
      console.log("Home Details found", home);
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        customPage: "Home",
        currentPage: "Home",
      });
    }
  });
};

exports.postAddToFavourite = (req, res)=>{
  Favourites.addToFavourite(req.body.id, error=>{
    if(error){
      console.log("Error while marking favourite ", error);
    }
    res.redirect('/favourites')
  })
}

