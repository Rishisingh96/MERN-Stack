
// External Module
const express = require('express');
const storeRouter = express.Router();

const homeController = require('../controller/storeController');

storeRouter.get("/homes", homeController.getHomes);
storeRouter.get("/", homeController.getIndex);
storeRouter.get("/bookings",homeController.getBookings);
storeRouter.get("/favourites", homeController.getFavouriteList)

module.exports = storeRouter;

