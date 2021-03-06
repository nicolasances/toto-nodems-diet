var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/MealPrepConverter');

var MongoClient = mongo.MongoClient;

exports.do  = function(req) {

  var id = req.params.id;
  var meal = req.body;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.mealPreps).updateOne(
          {_id: new mongo.ObjectId(id)},
          {$set: converter.mealPrepConverter.toMealPO(meal)},
          function(err, res) {

        db.close();

        success({id: res.insertedId});
      });

    });
  });

}
