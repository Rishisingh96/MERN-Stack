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

  Home.findById(homeId, (home) => {
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
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    }),
  );
};

exports.postAddHome = (req, res, next) => {
  console.log("Home Registered Successfully for: ", req.body);

  const { houseName, price, location, rating, imageUrl } = req.body;
  
  const home = new Home(houseName, price, location, rating, imageUrl);

  home.save();

  res.redirect("/host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, imageUrl } = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl);
  home.id = id;
  home.save();
  res.redirect("/host/host-home-list");
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('Came to delete ', homeId);
  Home.deleteById(homeId, error => {
    if (error) {
      console.log('Error while deleting ', error);
    }
    res.redirect("/host/host-home-list");
  })
};
