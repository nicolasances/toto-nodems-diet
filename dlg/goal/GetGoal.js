var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/GoalConverter');

var MongoClient = mongo.MongoClient;

exports.do  = function(goal) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.goal).find().toArray(function(err, array) {

        db.close();

        if (array == null || array.length == 0) {

          success({});

          return;
        }

        success(converter.goalConverter.toGoal(array[0]));
      });

    });
  });

}
