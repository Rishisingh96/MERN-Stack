
// External Module
const express = require('express');
const hostRouter = express.Router();


const { getAddHome, postAddHome } = require('../controller/homes');
// const homeController = require('../controller/homes');

// hostRouter.get("/add-home", homeController.getAddHome)
hostRouter.get("/add-home", getAddHome)


// hostRouter.post("/add-home", homeController.postAddHome)
hostRouter.post("/add-home", postAddHome)

exports.hostRouter = hostRouter