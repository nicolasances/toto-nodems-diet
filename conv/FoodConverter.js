var moment = require('moment-timezone');

exports.foodConverter = {

  toFoodPO : function(food) {

    return {
      name: food.name,
      calories: parseFloat(food.calories),
      fat: parseFloat(food.fat),
      carbs: parseFloat(food.carbs),
      sugars: parseFloat(food.sugars),
      proteins: parseFloat(food.proteins),
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
