
const categories = [
  {id: 'meat', name: 'Meat', image: '/img/meat.png'},
  {id: 'fish', name: 'Fish', image: '/img/fish.png'},
  {id: 'vegetables', name: 'Veggies', image: '/img/vegetables.png'},
  {id: 'fruits', name: 'Fruits', image: '/img/fruits.png'},
  {id: 'smoothie', name: 'Smoothie', image: '/img/smoothie.png'},
  {id: 'dairy', name: 'Dairy', image: '/img/dairy.png'},
  {id: 'fastfood', name: 'Fast food', image: '/img/fastfood.png'},
  {id: 'drinks', name: 'Drinks', image: '/img/drinks.png'},
  {id: 'bread', name: 'Bread', image: '/img/bread.png'},
  {id: 'pasta', name: 'Pasta & Rice', image: '/img/pasta.png'},
  {id: 'cakes', name: 'Cake', image: '/img/cake.png'},
  {id: 'meal', name: 'Prepared food', image: '/img/meal.png'},
  {id: 'sauce', name: 'Sauces & Jams', image: '/img/sauce.png'},
  {id: 'cereals', name: 'Cereals', image: '/img/cereals.png'}
]

exports.do = function() {

  return new Promise(function(success, failure) {

    success({categories: categories});

  });

}
