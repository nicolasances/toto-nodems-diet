var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/FoodConverter');

var MongoClient = mongo.MongoClient;

exports.getFoods = function() {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      var results = db.db(config.dbName).collection(config.collections.food).find().toArray(function(err, array) {

        db.close();

        var foods = [];

        for (var i = 0; i < array.length; i++) {

          var food = converter.foodConverter.toFood(array[i]);

          waters.push(food);
        }

        success({foods: foods});

      });
    });
  });

}
