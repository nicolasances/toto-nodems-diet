var moment = require('moment-timezone');

exports.mealConverter = {

  toMealPO : function(meal) {

    var aliments = [];
    for (var i = 0; i < meal.aliments.length; i++) {
      aliments.push({
        id: meal.aliments[i].id,
        name: meal.aliments[i].name,
        amountGr: meal.aliments[i].amountGr,
        amountMl: meal.aliments[i].amountMl,
        amount: meal.aliments[i].amount,
      })
    }

    return {
      date: meal.date,
      time: meal.time,
      calories: parseFloat(meal.calories),
      fat: parseFloat(meal.fat),
      carbs: parseFloat(meal.carbs),
      sugars: parseFloat(meal.sugars),
      proteins: parseFloat(meal.proteins),
      aliments: aliments
    };
  },

  toMeal : function(json) {

    return {
      id: json._id,
      date: json.date,
      time: json.time,
      calories: json.calories,
      fat: json.fat,
      carbs: json.carbs,
      sugars: json.sugars,
      proteins: json.proteins,
      aliments: json.aliments
    }
  },

  /**
   * Filters the meals.
   *  Per date : specific yyyyMMdd date
   *  From date : gets all the meals from a specific date
   */
  findMeals : function(date, dateFrom) {

    if (dateFrom != null) return {date: {'$gte' : dateFrom}};

    return {date: date};
  }
}
