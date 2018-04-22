var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/FoodConverter');

var MongoClient = mongo.MongoClient;

exports.getFoods = function(filter) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      var mongoFilter = {};
      if (filter.category != null) mongoFilter = {category: filter.category};

      var results = db.db(config.dbName).collection(config.collections.food).find(mongoFilter).sort({name: 1}).toArray(function(err, array) {

        db.close();

        var foods = [];

        for (var i = 0; i < array.length; i++) {

          var food = converter.foodConverter.toFood(array[i]);

          foods.push(food);
        }

        success({foods: foods});

      });
    });
  });

}
