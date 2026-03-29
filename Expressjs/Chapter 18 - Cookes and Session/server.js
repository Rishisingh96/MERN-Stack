// Core Module
const path = require('path');

require('dotenv').config();

// External Module
const express = require('express');
const mongoose = require('mongoose');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const authRouter = require("./routes/authRouter")
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) =>{
  console.log('cookie check middleware',req.get('Cookie'));
  req.isLoggedIn = req.get('Cookie') ? req.get('Cookie').split('=')[1] === 'true':false;
  next();
})

app.use(storeRouter);
app.use("/host", (req,res,next)=>{
  if(req.isLoggedIn){
    next();
  }else{
    res.redirect("/login");
  }
});
app.use("/host", hostRouter);
app.use(authRouter);

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

// Always use one named DB (default airbnbHomes). Without this, URI ...mongodb.net/?... uses "test",
// so clearing another DB still shows old listings.
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || 'airbnbHomes';

mongoose
  .connect(MONGODB_URI, { dbName: MONGODB_DB_NAME })
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
