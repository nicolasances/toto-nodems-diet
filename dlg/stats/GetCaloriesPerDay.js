var mongo = require('mongodb');
var config = require('../../config');

var MongoClient = mongo.MongoClient;

/**
 * Date is in yyyyMMdd format
 */
exports.do = function(dateFrom) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      var results = db.db(config.dbName).collection(config.collections.meals)
          .aggregate([{$match: {date: {$gte: dateFrom}}}, {$group: {_id: {date: '$date'}, calories: {$sum: '$calories'}}}, {$sort: {'_id.date': 1}}])
          .toArray(function(err, array) {

        db.close();

        var meals = [];

        for (var i = 0; i < array.length; i++) {

          meals.push({date: array[i]._id.date, calories: array[i].calories});

        }

        success({meals: meals});

      });
    });
  });

}
