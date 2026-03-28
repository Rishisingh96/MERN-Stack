// Core Module
// const path = require('path');
// const fs = require('fs');
// Local Module
const mongodb = require('mongodb');
const dbUtil = require("../utils/databaseUtil");

const Favourites = require('./favouritesModels');


// const dataPath = path.join(rootDir, 'data', 'homes.json');
// const homeDataPath = path.join(rootDir, 'data', 'homes.json');

//fake database 
let registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, imageUrl, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    // Keep property name consistent with DB column used in queries
    this.imageUrl = imageUrl;
    this.description = description;
    this.id = id;
  }

  save() {
    const database = dbUtil.getDb();

    if (this.id) {
      const _id = new mongodb.ObjectId(this.id);
      return database
        .collection('homes')
        .updateOne(
          { _id },
          {
            $set: {
              houseName: this.houseName,
              price: this.price,
              location: this.location,
              rating: this.rating,
              imageUrl: this.imageUrl,
              description: this.description,
            },
          }
        );
    }

    return database.collection('homes').insertOne({
      houseName: this.houseName,
      price: this.price,
      location: this.location,
      rating: this.rating,
      imageUrl: this.imageUrl,
      description: this.description,
    });
  }

  static find()() {
    const database = dbUtil.getDb();
    return database
      .collection('homes')
      .find()
      .toArray()
      .then((homes) => homes.map((home) => ({ ...home, id: home._id.toString() })));
  }

  static findById(homeId) {
    const database = dbUtil.getDb();
    const _id = new mongodb.ObjectId(homeId);
    return database
      .collection('homes')
      .findOne({ _id })
      .then((home) => (home ? { ...home, id: home._id.toString() } : null));
  }

  static deleteById(homeId) {
    const database = dbUtil.getDb();
    const _id = new mongodb.ObjectId(homeId);
    return database.collection('homes').deleteOne({ _id });
  }
};