const mongodb = require('mongodb');
const { getDb } = require("../utils/databaseUtil");

module.exports = class Favourites {
  constructor(houseId) {
    this.houseId = houseId && houseId.toString();
  }

  save() {
    const db = getDb();
    const houseId = this.houseId;
    return db.collection('favourites')
      .findOne({ houseId: houseId })
      .then((existingFav) => {
        if (!existingFav) {
          return db.collection('favourites').insertOne({ houseId });
        }
        return Promise.resolve();
      });
  }

  static getFavourites() {
    const db = getDb();
    return db
      .collection('favourites')
      .find()
      .toArray()
      .then((favs) => favs.map((fav) => ({ ...fav, houseId: fav.houseId && fav.houseId.toString() })));
  }

  static deleteById(delHomeId) {
    const db = getDb();
    const normalizedId = delHomeId && delHomeId.toString();

    return db
      .collection('favourites')
      .deleteOne({ houseId: normalizedId })
      .then((result) => {
        if (result.deletedCount > 0) {
          return result;
        }
        // fallback if records were stored as ObjectId type
        try {
          const objectId = new mongodb.ObjectId(normalizedId);
          return db.collection('favourites').deleteOne({ houseId: objectId });
        } catch (error) {
          return result;
        }
      });
  }
};
