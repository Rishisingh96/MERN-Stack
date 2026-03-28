const Favourites = require("../models/favouritesModels");
const Home = require("../models/homeModels");

// Using promise-based MySQL API from homeModels

exports.getIndex = (req, res, next) => {
  Home.find()()
    .then((homes) => {
      res.render("store/index", {
        registeredHomes: homes,
        pageTitle: "airbnb Home",
        currentPage: "index",
      });
    })
    .catch((err) => {
      console.log("Error while fetching homes for index:", err);
      next(err);
    });
};

exports.getHomes = (req, res, next) => {
  Home.find()()
    .then((homes) => {
      res.render("store/home-list", {
        registeredHomes: homes,
        pageTitle: "Home List",
        currentPage: "Home",
      });
    })
    .catch((err) => {
      console.log("Error while fetching homes list:", err);
      next(err);
    });
};

exports.getBookings = (req, res) => {
  res.render("store/bookings", {
    pageTitle: "My Booking",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourites.getFavourites()
    .then((favourites) => {
      const favouriteHouseIds = favourites.map((fav) => fav.houseId);
      return Home.find()().then((registeredHomes) => {
        const favouriteHomes = registeredHomes.filter((home) =>
          favouriteHouseIds.includes(home.id)
        );
        res.render("store/favourite-list", {
          favouriteHomes: favouriteHomes,
          pageTitle: "My Favourites",
          currentPage: "favourites",
        });
      });
    })
    .catch((err) => {
      console.log("Error while fetching favourites:", err);
      next(err);
    });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourites.deleteById(homeId).then(result => {
    console.log('Fav Removed: ', result);
  }).catch(err => {
    console.log("Error while removing favourite: ", err);
  }).finally(() => {
    res.redirect("/favourites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;

  Home.findById(homeId)
    .then((home) => {
      if (!home) {
        console.log("Home not found..");
        return res.redirect("/homes");
      }

      // console.log("Home Details found", home);
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        customPage: "Home",
        currentPage: "Home",
      });
    })
    .catch((err) => {
      console.log("Error while fetching home details:", err);
      next(err);
    });
};

exports.postAddToFavourite = (req, res) => {
  const homeId = req.body.id;
  const fav = new Favourites(homeId);
  fav.save().then(result =>{
    console.log('Fav added:', result);
  }).catch(err => {
    console.log("Error while marking favourite: ", err);
  }).finally(() => {
    res.redirect("/favourites");
  })
};
