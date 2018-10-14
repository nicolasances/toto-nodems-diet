var moment = require('moment-timezone');
var config = require('../config');

exports.goalConverter = {

  toGoalPO : function(goal) {

    return {
      calories: goal.calories,
      set: moment().tz(config.timezone).format('YYYYMMDD')
    };
  },

  toGoal : function(json) {

    return {
      id: json._id,
      calories: json.calories,
      set: json.set
    };
  }

}
