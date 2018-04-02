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
      calories: meal.calories,
      fat: meal.fat,
      carbs: meal.carbs,
      sugars: meal.sugars,
      proteins: meal.proteins,
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

  findMeals : function(date) {

    return {date: date};
  }
}
