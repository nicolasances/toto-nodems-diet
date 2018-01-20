var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/WaterConverter');

var MongoClient = mongo.MongoClient;

exports.getWaterConsumptionGoal = function() {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.waterGoal).find(converter.waterConverter.findWaterConsumptionGoal()).toArray(function(err, array) {

        db.close();

        if (array == null || array.length == 0) success({});
        else success({amount: array[0].amount});

      });
    });
  });

}
