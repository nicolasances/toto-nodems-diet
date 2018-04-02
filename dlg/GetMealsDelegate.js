var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/MealConverter');

var MongoClient = mongo.MongoClient;

/**
 * Date is in yyyyMMdd format
 */
exports.getWater = function(date) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      var results = db.db(config.dbName).collection(config.collections.meals).find(converter.mealConverter.findMeals(date)).toArray(function(err, array) {

        db.close();

        var meals = [];

        for (var i = 0; i < array.length; i++) {

          var meal = converter.mealConverter.toMeal(array[i]);

          meals.push(meal);

        }

        success({meals: meals});

      });
    });
  });

}