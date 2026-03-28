const Home = require("../models/homeModels");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome",{
    pageTitle: "Add Home to airbnb", 
    currentPage:"addHome",
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.find()((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    })
  );
};


exports.postAddHome = (req, res, next) => {
  console.log('Home Registered Successfully for: ', req.body);

  const {houseName, price,location,rating,imageUrl} = req.body;
  const home = new Home(houseName, price,location,rating,imageUrl);

  home.save().then(()=>{
    console.log('Home Saved successfully..')
  });

  res.render('host/home-added', 
    { pageTitle: 'Home Added Successfully',
      currentPage: 'homeAdded'
     });
};