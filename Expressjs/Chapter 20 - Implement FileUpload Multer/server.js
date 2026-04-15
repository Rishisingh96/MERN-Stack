// Core Module
const path = require('path');
require('dotenv').config();

// External Module
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const multer = require('multer')

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

const PORT = process.env.PORT || 3009;
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || 'airbnbHomes';

if (!MONGODB_URI) {
  console.error(
    'Missing MONGODB_URI. Copy .env.example to .env and set your Atlas connection string (include /databaseName before ?).'
  );
  process.exit(1);
}

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// const store = new MongoDBStore({
//   uri: DB_PATH,
//   collection: 'sessions'
// });

// for creating a random string 
const randomString = (length) =>{
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for(let i=0; i<length; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const storage = multer.diskStorage({
  destination: (req,file, cb)=>{
    cb(null, "uploads/");
  },
  filename: (req, file, cb) =>{
    cb(null, randomString(10) + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) =>{
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const multerOptions ={
  storage,fileFilter
};

const sessionStore = new MongoDBStore({
  uri: MONGODB_URI,
  databaseName: MONGODB_DB_NAME,
  collection: 'sessions',
});

app.use(express.urlencoded({ extended: true }));
app.use(multer(multerOptions).single('photo'));
app.use(express.static(path.join(rootDir, 'public')))
app.use("/uploads", express.static(path.join(rootDir, 'uploads')))
app.use("/host/uploads", express.static(path.join(rootDir, 'uploads')))
app.use("/homes/uploads", express.static(path.join(rootDir, 'uploads')))

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'Rishi coding',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);

app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});

// app.use((req, res, next) =>{
   // console.log('cookie check middleware',req.get('Cookie'));
//   req.isLoggedIn = req.get('Cookie') ? req.get('Cookie').split('=')[1] === 'true':false;
//   next();
// })

app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/host", hostRouter);
app.use(authRouter);

app.use(express.static(path.join(rootDir, 'public')));

app.use(errorsController.pageNotFound);

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
