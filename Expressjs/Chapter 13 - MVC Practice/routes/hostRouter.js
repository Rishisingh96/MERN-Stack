
// External Module
const express = require('express');
const hostRouter = express.Router();


const { getAddHome, postAddHome, getHostHomes } = require('../controller/hostContoller');
// const homeController = require('../controller/homes');

// hostRouter.get("/add-home", homeController.getAddHome)
hostRouter.get("/add-home", getAddHome)


// hostRouter.post("/add-home", homeController.postAddHome)
hostRouter.post("/add-home", postAddHome)

hostRouter.get("/host-home-list", getHostHomes)

exports.hostRouter = hostRouter