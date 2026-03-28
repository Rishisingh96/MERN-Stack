const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://root:Rishi%409838@first-project.jiyzzyi.mongodb.net/?appName=First-Project";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      console.log("Connected to MongoDB");
      _db = client.db("airbnb");
      callback(client);
    })
    .catch((err) => {
      console.log("Error while connecting to Mongo:", err);
    });
};

const getDb = () =>{
    if(!_db){
        throw new Error("Database not connected..");
    }
    return _db;
};

// module.exports = mongoConnect;

exports.mongoConnect = mongoConnect
exports.getDb = getDb;
