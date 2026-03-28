// Core Module
const path = require('path');
const fs = require('fs');
// Local Module
const rootDir = require("../utils/pathUtil");


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
        registeredHomes.push(this);
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error =>{
            console.log("File writing Concluded", error);
        });
    }

    static find()(callback) {
        fs.readFile(homeDataPath, (err, data) =>{
            console.log("File read: ", err,data);
            callback(!err ? JSON.parse(data) : []);
        });
    }
};