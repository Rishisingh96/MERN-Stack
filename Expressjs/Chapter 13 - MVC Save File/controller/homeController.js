const Home = require("../models/homeModels");

exports.getAddHome = (req, res, next) => {
  Home.find()((registeredHomes) => {
    console.log(registeredHomes);
    res.render("addHome", {
      pageTitle: "Add Home to airbnb",
      currentPage: "addHome",
      registeredHomes: registeredHomes
    });
  });
};

exports.postAddHome = (req, res, next) => {
  console.log('Home Registered Successfully for: ', req.body);

  const {houseName, price,location,rating,imageUrl} = req.body;
  const home = new Home(houseName, price,location,rating,imageUrl);

  home.save();

  res.render('homeAdded', 
    { pageTitle: 'Home Added Successfully',
      currentPage: 'homeAdded'
     });
};

exports.getHomes = (req, res, next) => {
  Home.find()((homeModels) =>{
    res.render("home",{
      registeredHomes: homeModels, 
      pageTitle:"airbnb Home", 
      currentPage:"Home",
    })
  })
};


