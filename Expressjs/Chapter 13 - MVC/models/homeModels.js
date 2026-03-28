// Core Module
const path = require('path');
const fs = require('fs');


// const dataPath = path.join(rootDir, 'data', 'homes.json');

//fake database 
const registeredHomes = [];

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
    }

    static find()() {
        return registeredHomes;
    }
} 