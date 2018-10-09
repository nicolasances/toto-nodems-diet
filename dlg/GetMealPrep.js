var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/MealPrepConverter');

var MongoClient = mongo.MongoClient;

/**
 * Date is in yyyyMMdd format
 */
exports.do = function(id) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      var results = db.db(config.dbName).collection(config.collections.mealPreps).find({_id: new mongo.ObjectId(id)}).toArray(function(err, array) {

        db.close();

        if (array == null || array.length == 0) success({});

        success(converter.mealPrepConverter.toMeal(array[0]));

      });
    });
  });

}
