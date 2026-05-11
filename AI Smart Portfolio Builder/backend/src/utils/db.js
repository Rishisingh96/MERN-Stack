const mongoose = require("mongoose");

let connected = false;

async function connectToMongo(uri) {
  if (connected) return;
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri, {
    autoIndex: process.env.NODE_ENV !== "production",
  });
  connected = true;
}

module.exports = { connectToMongo };

