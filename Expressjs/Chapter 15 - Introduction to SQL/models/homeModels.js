// Core Module
// const path = require('path');
const fs = require('fs');
// Local Module
// const rootDir = require("../utils/pathUtil");
const db = require("../utils/databaseUtil");

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
    if (this.id) {
      // update existing record
      const params = [
        this.houseName,
        this.price,
        this.location,
        this.rating,
        this.imageUrl,
        this.description,
        this.id,
      ].map((v) => (v === undefined ? null : v));

      return db.execute(
        "UPDATE home SET name=?, price=?, location=?, rating=?, imageUrl=?, description=? WHERE id=?",
        params,
      );
    } else {
      // insert new record
      const params = [
        this.houseName,
        this.price,
        this.location,
        this.rating,
        this.imageUrl,
        this.description,
      ].map((v) => (v === undefined ? null : v));

      return db.execute(
        "INSERT INTO home (name, price, location, rating, imageUrl, description) VALUES (?, ?, ?, ?, ?, ?)",
        params,
      );
    }
  }

  static find()() {
    return db.execute(
      "SELECT id, name AS houseName, price, location, rating, imageUrl, description FROM home",
    );
  }

  static findById(homeId) {
    return db.execute(
      "SELECT id, name AS houseName, price, location, rating, imageUrl, description FROM home WHERE id=?",
      [homeId],
    );
  }

  static deleteById(homeId) {
    return db.execute("DELETE FROM home WHERE id=?", [homeId]);
  }
};