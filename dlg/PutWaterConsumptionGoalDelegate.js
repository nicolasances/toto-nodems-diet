var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/WaterConverter');

var MongoClient = mongo.MongoClient;

exports.do = function(req) {

  var wc = req.body;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.waterGoal).find(converter.waterConverter.findWaterConsumptionGoal()).toArray(function(err, array) {

        if (array == null || array.length == 0) {

          var waterConsumption = converter.waterConverter.toWaterGoalPO(wc);

          db.db(config.dbName).collection(config.collections.waterGoal).insertOne(waterConsumption, function(err, res) {

            db.close();

            success();
          });
        }
        else {

          db.db(config.dbName).collection(config.collections.waterGoal).updateOne(array[0], waterConsumption, function(err, res) {

              db.close();

              success();
          });
        }

      });
    });
  });

}
