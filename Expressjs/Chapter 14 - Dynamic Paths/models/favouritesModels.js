const fs = require('fs');
const path = require('path')


const rootDir = require('../utils/pathUtil');
const favouritePath = path.join(rootDir, "data", "favourites.json");

module.exports = class Favourites{
    static addToFavourite(homeId,callback){
        this.getFavourite((favourites) =>{
            if(favourites.includes(homeId)){
                console.log("Home is alredy marked favourites");
            }else{
                favourites.push(homeId);
                fs.writeFile(favouritePath, JSON.stringify(favourites), callback);
            }
        });
    }

    static getFavourite(callback){
        fs.readFile(favouritePath, (err, data) =>{
            callback(!err ? JSON.parse(data) : []);
        });
    }
}