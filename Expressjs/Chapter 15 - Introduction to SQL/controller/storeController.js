const Favourites = require("../models/favouritesModels");
const Home = require("../models/homeModels");

// Using promise-based MySQL API from homeModels
exports.getIndex = (req, res, next) => {
  Home.find()()
    .then(([homes]) => {
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
    .then(([homes]) => {
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
  Favourites.getFavourite((favourites) => {
    Home.find()()
      .then(([homes]) => {
        // Ensure we compare the same types (string vs number)
        const favouriteIds = favourites.map((id) => id.toString());
        const favouriteHomes = homes.filter((home) =>
          favouriteIds.includes(home.id.toString())
        );

        res.render("store/favourite-list", {
          favouriteHomes: favouriteHomes,
          pageTitle: "My Favourites",
          currentPage: "favourites",
        });
      })
      .catch((err) => {
        console.log("Error while fetching favourite homes:", err);
        next(err);
      });
  });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourites.deleteHomeFById(homeId, (error) => {
    if (error) {
      console.log("Error while removing from Favourite", error);
    }
    res.redirect("/favourites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("At home details page", homeId);

  Home.findById(homeId)
    .then(([rows]) => {
      const home = rows[0];

      if (!home) {
        console.log("Home not found..");
        return res.redirect("/homes");
      }

      console.log("Home Details found", home);
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
  Favourites.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favourite ", error);
    }
    res.redirect("/favourites");
  });
};
