var moment = require('moment-timezone');

exports.foodConverter = {

  toFoodPO : function(food) {

    return {
      name: food.name,
      calories: food.calories,
      fat: food.fat,
      carbs: food.carbs,
      sugars: food.sugars,
      proteins: food.proteins,
      category: food.category,
      unit: food.unit // can be 1, 100gr, 100ml
    };
  },

  toFood : function(json) {

    return {
      id: json._id,
      name: json.name,
      calories: json.calories,
      fat: json.fat,
      carbs: json.carbs,
      sugars: json.sugars,
      proteins: json.proteins,
      category: json.category,
      unit: json.unit
    }
  }
}
