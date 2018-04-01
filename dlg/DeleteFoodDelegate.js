var mongo = require('mongodb');
var config = require('../config');

var MongoClient = mongo.MongoClient;

exports.deleteFood = function(id) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.food).deleteOne({_id: new mongo.ObjectId(id)}, function(err, res) {

        db.close();

        success();

      });
    });
  });

}
