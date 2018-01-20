var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/WaterConverter');

var MongoClient = mongo.MongoClient;

/**
 * Water filter is {date: yyyyMMdd}
 */
exports.getWater = function(waterFilter) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      var results = db.db(config.dbName).collection(config.collections.water).find(converter.waterConverter.findWaterConsumption(waterFilter)).sort(converter.weightConverter.sortDateDesc()).toArray(function(err, array) {

        db.close();

        var total = 0;
        var waters = [];

        for (var i = 0; i < array.length; i++) {

          var water = converter.waterConverter.toWaterConsumption(array[i]);

          waters.push(water);

          total += water.amount;
        }

        success({consumption: waters, total: total});

      });
    });
  });

}
