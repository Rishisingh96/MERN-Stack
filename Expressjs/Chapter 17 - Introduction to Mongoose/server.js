// Core Module
const path = require('path');

require('dotenv').config();

// External Module
const express = require('express');
const mongoose = require('mongoose');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorsController.pageNotFound);

const PORT = process.env.PORT || 3009;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error(
    'Missing MONGODB_URI. Copy .env.example to .env and set your Atlas connection string (include /databaseName before ?).'
  );
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    const dbName = mongoose.connection.name;
    console.log('Connected to Mongo');
    console.log(`Using database: "${dbName}" — collections appear after first save (e.g. homes, favourites)`);
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error while connecting to Mongo: ', err);
    process.exit(1);
  });
