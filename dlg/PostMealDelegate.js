var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/MealConverter');

var MongoClient = mongo.MongoClient;

exports.do  = function(req) {

  var meal = req.body;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.meals).insertOne(converter.mealConverter.toMealPO(meal), function(err, res) {

        db.close();

        success({id: res.insertedId});
      });

    });
  });

}
