// Core Module
const path = require('path');
const fs = require('fs');
// Local Module
const rootDir = require("../utils/pathUtil");
const Favourites = require('./favouritesModels');


// const dataPath = path.join(rootDir, 'data', 'homes.json');
const homeDataPath = path.join(rootDir, 'data', 'homes.json');

//fake database 
let registeredHomes = [];


module.exports = class Home {
    constructor( houseName, price, location, rating, imageUrl ) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }


 save() {
    Home.fetchAll((registeredHomes) => {
      if (this.id) { // edit home case
        registeredHomes = registeredHomes.map(home => 
          home.id === this.id ? this : home);
      } else { // add home case
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
      
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

    static fetchAll(callback) {
        fs.readFile(homeDataPath, (err, data) =>{
            console.log("File read: ", err,data);
            callback(!err ? JSON.parse(data) : []);
        });
    }

    static findById(homeId, callback){
        this.fetchAll(homes =>{
            const homeFound = homes.find(home => home.id === homeId);
            callback(homeFound);
        })
    }

    static deleteById(homeId, callback){
      this.fetchAll(homes=>{
        homes = homes.filter(home => home.id !==homeId)
        fs.writeFile(homeDataPath, 
          JSON.stringify(homes), error =>{
            Favourites.deleteHomeFById(homeId, callback);
          }
      );
      })
    }
};