var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/FoodConverter');

var MongoClient = mongo.MongoClient;

exports.do = function(req) {

  var foodId = req.params.id;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      var results = db.db(config.dbName).collection(config.collections.food).find({_id: new mongo.ObjectId(foodId)}).toArray(function(err, array) {

        db.close();

        if (array.length == 0) {
          success({});
          return;
        }

        success(converter.foodConverter.toFood(array[0]));

      });
    });
  });

}
