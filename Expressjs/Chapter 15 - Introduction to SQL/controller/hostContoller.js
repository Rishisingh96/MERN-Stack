const Home = require("../models/homeModels");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId)
    .then(([rows]) => {
      const home = rows[0];

      if (!home) {
        console.log("Home not found for editing.");
        return res.redirect("/host/host-home-list");
      }

      console.log(homeId, editing, home);
      res.render("host/edit-home", {
        home: home,
        pageTitle: "Edit your Home",
        currentPage: "host-homes",
        editing: editing,
      });
    })
    .catch((err) => {
      console.log("Error while fetching home for edit:", err);
      next(err);
    });
};

exports.getHostHomes = (req, res, next) => {
  Home.find()()
    .then(([homes]) => {
      res.render("host/host-home-list", {
        registeredHomes: homes,
        pageTitle: "Host Homes List",
        currentPage: "host-homes",
      });
    })
    .catch((err) => {
      console.log("Error while fetching host homes:", err);
      next(err);
    });
};

exports.postAddHome = (req, res, next) => {
  console.log("Home Registered Successfully for: ", req.body);

  const { houseName, price, location, rating, imageUrl, description } = req.body;

  const home = new Home(houseName, price, location, rating, imageUrl, description);

  home
    .save()
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error while saving new home:", err);
      next(err);
    });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, imageUrl, description } = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl, description);
  home.id = id;

  home
    .save()
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error while updating home:", err);
      next(err);
    });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Came to delete ", homeId);

  Home.deleteById(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error while deleting ", err);
      next(err);
    });
};

