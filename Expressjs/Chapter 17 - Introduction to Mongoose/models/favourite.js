const mongoose = require('mongoose');

const favouriteSchema = mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home',
    required: true,
    unique: true,
    sparse: true
  }
});

module.exports = mongoose.model('Favourite', favouriteSchema);