var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/MealConverter');

var MongoClient = mongo.MongoClient;

/**
 * Date is in yyyyMMdd format
 */
exports.do = function(req) {

  var id = req.params.id;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      var results = db.db(config.dbName).collection(config.collections.meals).find({_id: new mongo.ObjectId(id)}).toArray(function(err, array) {

        db.close();

        if (array == null || array.length == 0) {
          success({});
          return;
        }
        
        var meal = converter.mealConverter.toMeal(array[0]);

        success(meal);

      });
    });
  });

}
