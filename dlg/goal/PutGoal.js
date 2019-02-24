var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/GoalConverter');

var MongoClient = mongo.MongoClient;

exports.do  = function(req) {

  var id = req.params.id;
  var goal = req.body;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.goal).updateOne(
          {_id: new mongo.ObjectId(id)},
          {$set: converter.goalConverter.toGoalPO(goal)},
          function(err, res) {

        db.close();

        success({id: res.insertedId});
      });

    });
  });

}
