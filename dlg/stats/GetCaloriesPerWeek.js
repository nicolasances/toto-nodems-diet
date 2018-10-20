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
          .aggregate([
            {$match: {date: {$gt: '20180501'}}},
            {$group: {_id: {date: '$date'}, calories: {$sum: '$calories'}}},
            {$project: {year: {$year: {$dateFromString: {dateString: '$_id.date', format: '%Y%m%d'}}}, week: {$week: {$dateFromString: {dateString: '$_id.date', format: '%Y%m%d'}}}, calories: '$calories'}},
            {$group: {_id: {week: '$week', year: '$year'}, calories: {$avg: '$calories'}}},
            {$sort: {'_id.week': 1}}])
          .toArray(function(err, array) {

        db.close();

        var meals = [];

        for (var i = 0; i < array.length; i++) {

          meals.push({
            week: array[i]._id.week,
            year: array[i]._id.year,
            calories: array[i].calories
          });

        }

        success({meals: meals});

      });
    });
  });

}
