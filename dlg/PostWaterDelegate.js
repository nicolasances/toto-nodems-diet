var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/WaterConverter');

var MongoClient = mongo.MongoClient;

exports.do  = function(req) {

  var water = req.body;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.water).insertOne(converter.waterConverter.toWaterPO(water), function(err, res) {

        db.close();

        success({id: res.insertedId});
      });

    });
  });

}
