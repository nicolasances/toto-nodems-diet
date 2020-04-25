var mongo = require('mongodb');
var config = require('../../config');
var DFAMP = require('../../remote/DFAMP');

var converter = require('../../conv/FoodConverter');

var MongoClient = mongo.MongoClient;

exports.do = function (req) {

    return new Promise(function (success, failure) {

        var cid = req.headers['x-correlation-id'];

        var foodId = req.params.id;

        // Get the recommendations from dfrbot
        DFAMP.predict(foodId, cid).then((data) => {

            if (!data) { success({}); return; }

            success({
                "foodId": foodId, 
                ...data
            })


        }, failure)

    });

}
