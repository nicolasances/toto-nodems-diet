var moment = require('moment-timezone');

exports.waterConverter = {

  findWaterConsumptionGoal : function() {

    return {goal: 'water-consumption'};
  },

  findWaterConsumption : function(filter) {

    if (filter.date != null) return {date: filter.date};

    return {};

  },

  toWaterConsumption : function(json) {

    return {
      amount: json.amount,
      hour: json.hour,
      timestamp: json.timestamp,
      date: json.date
    };
  },

  toWaterGoalPO : function(goal) {

    return {
      goal: 'water-consumption',
      amount: parseInt(goal.amount)
    };
  },

  toWaterPO : function(water) {

    return {
      amount: parseInt(water.amount),
      hour: moment().tz('Europe/Rome').format('H'),
      timestamp: moment().tz('Europe/Rome').format('YYYYMMDD HH:mm:ss'),
      date: moment().tz('Europe/Rome').format('YYYYMMDD')
    };
  }
}
