var mongo = require('mongodb');
var config = require('../../config');
var DFRBOT = require('../../remote/DFRBOT');

var converter = require('../../conv/FoodConverter');

var MongoClient = mongo.MongoClient;

exports.do = function (req) {

    return new Promise(function (success, failure) {

        var cid = req.headers['x-correlation-id'];

        var time = req.query.time; // Must be a string representing the time formatted as HH:mm
        var date = req.query.date; // Must be a string representing the date formatted as YYYYMMDD

        // Validations
        if (!time) { failure({ code: 400, message: 'Missing "time" query parameter' }); return; }
        if (!date) { failure({ code: 400, message: 'Missing "date" query parameter' }); return; }

        // Get the recommendations from dfrbot
        DFRBOT.predict(date, time, cid).then((data) => {

            if (!data || !data.aliments) { success({}); return; }

            let ids = []
            for (var i = 0; i < data.aliments.length; i++) {
                ids.push(new mongo.ObjectId(data.aliments[i]));
            }

            // Retrieve the aliments
            MongoClient.connect(config.mongoUrl, function (err, db) {

                // Prepare the filter 
                let filter = { _id: { $in: ids } }

                db.db(config.dbName).collection(config.collections.food).find(filter).toArray(function (err, array) {

                    db.close();

                    var foods = [];

                    for (var i = 0; i < array.length; i++) {

                        var food = converter.foodConverter.toFood(array[i]);

                        foods.push(food);
                    }

                    success({ foods: foods });

                });
            });

        }, failure)

    });

}
