const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log('Connected to MongoDB');
    return mongoose.connection.db.dropCollection('favourites');
  })
  .then(() => {
    console.log('Favourites collection dropped');
    mongoose.disconnect();
  })
  .catch(err => {
    console.log('Error:', err);
    mongoose.disconnect();
  });