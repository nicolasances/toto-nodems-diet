var mongo = require('mongodb');
var config = require('../config');

var MongoClient = mongo.MongoClient;

/**
 * Date is in yyyyMMdd format
 */
exports.do = function(req) {

  var id = req.params.id;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      var results = db.db(config.dbName).collection(config.collections.meals).deleteOne({_id: new mongo.ObjectId(id)}, function(err, array) {

        db.close();

        success({});

      });
    });
  });

}
