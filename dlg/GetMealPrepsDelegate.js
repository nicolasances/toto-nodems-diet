var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/MealPrepConverter');

var MongoClient = mongo.MongoClient;

/**
 * Date is in yyyyMMdd format
 */
exports.getMealPreps = function(date, dateFrom) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      var results = db.db(config.dbName).collection(config.collections.mealPreps).find().toArray(function(err, array) {

        db.close();

        var meals = [];

        for (var i = 0; i < array.length; i++) {

          var meal = converter.mealPrepConverter.toMeal(array[i]);

          meals.push(meal);

        }

        success({meals: meals});

      });
    });
  });

}
