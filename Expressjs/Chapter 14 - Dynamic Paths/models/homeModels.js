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
        this.id = Math.random().toString();
        Home.fetchAll((registeredHomes)=>{
            registeredHomes.push(this);
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error =>{
            console.log("File writing Concluded", error);
        });
        })
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
};