
const categories = [
  {id: 'meat', name: 'Meat', image: '/img/groceries/categories/meat.png'},
  {id: 'fish', name: 'Fish', image: '/img/groceries/categories/fish.png'},
  {id: 'vegetables', name: 'Veggies', image: '/img/groceries/categories/vegetables.png'},
  {id: 'fruits', name: 'Fruits', image: '/img/groceries/categories/fruits.png'},
  {id: 'smoothie', name: 'Smoothie', image: '/img/groceries/categories/smoothie.png'},
  {id: 'dairy', name: 'Dairy', image: '/img/groceries/categories/dairy.png'},
  {id: 'fastfood', name: 'Fast food', image: '/img/groceries/categories/fastfood.png'},
  {id: 'drinks', name: 'Drinks', image: '/img/groceries/categories/drinks.png'},
  {id: 'bread', name: 'Bread', image: '/img/groceries/categories/bread.png'},
  {id: 'pasta', name: 'Pasta & Rice', image: '/img/groceries/categories/pasta.png'},
  {id: 'cakes', name: 'Cake', image: '/img/groceries/categories/cake.png'},
  {id: 'meal', name: 'Prepared food', image: '/img/groceries/categories/meal.png'},
  {id: 'sauce', name: 'Sauces & Jams', image: '/img/groceries/categories/sauce.png'},
  {id: 'cereals', name: 'Cereals', image: '/img/groceries/categories/cereals.png'}
]

exports.do = function() {

  return new Promise(function(success, failure) {

    success({categories: categories});

  });

}
