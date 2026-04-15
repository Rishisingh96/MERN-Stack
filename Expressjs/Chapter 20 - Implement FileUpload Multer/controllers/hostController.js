const Home = require("../models/home");
const fs = require("fs");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId).then((home) => {
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
      isLoggedIn: req.isLoggedIn,
      user:req.session.user
    });
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
       isLoggedIn: req.isLoggedIn,
       user: req.session.user,
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, description } =
    req.body;
    console.log(req.body);
    console.log(req.file);

    if(!req.file){
      console.log("No image providde");
      return res.status(422).redirect("/host/add-home");
    }

  const home = new Home({
    houseName,
    price: Number(price),
    location,
    rating: Number(rating),
    photo: req.file.path,
    description,
  });
  home
    .save()
    .then(() => {
      console.log("Home Saved successfully");
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error while saving home: ", err);
      res.redirect("/host/add-home");
    });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, description } =
    req.body;;
  Home.findById(id)
    .then((home) => {
      home.houseName = houseName;
      home.price = price;
      home.location = location;
      home.rating = rating;
      home.description = description;

      if (req.file) {
        if (home.photo) {
          fs.unlink(home.photo, (err) => {
            if (err) {
              console.log("Error while deleting file ", err);
            }
          });
        }
        home.photo = req.file.path;
      }

      home
        .save()
        .then((result) => {
          console.log("Home updated ", result);
        })
        .catch((err) => {
          console.log("Error while updating ", err);
        });
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error while finding home ", err);
    });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Came to delete ", homeId);
  
  Home.findById(homeId)
    .then((home) => {
      if (home && home.photo) {
        fs.unlink(home.photo, (err) => {
          if (err) {
            console.log("Error while deleting file ", err);
          } else {
            console.log("File deleted successfully");
          }
        });
      }
      
      return Home.findByIdAndDelete(homeId);
    })
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("Error while deleting ", error);
    });
};
