$( document ).ready(function() {
  console.log('testing dishes');

  var dishesDatabase = [
    {
      'name': 'pizza',
      'description': 'Freshly baked with fresh ingredients',
      'count': 10,
      'cost': 7.99,
      'picture': 'http://experienceourcity.com/wp-content/uploads/2018/02/pizza.jpg'
    },
  
    {
      'name': 'Marinara',
      'description': 'Pasta with fresh herbs and veggies',
      'count': 5,
      'cost': 5.99,
      'picture': 'http://experienceourcity.com/wp-content/uploads/2018/02/pizza.jpg'
    }
  ];
  
  function renderDishes(dishes) {
    dishes.forEach(dish => {
      return $("#menu-items").append(createDishElement(dish));
    });
  }


  function createDishElement(dish) {
    var $dish = $("<div>");
    var $picture = $("<img>");
    var $h3 = $("<title>");


  }

  renderDishes(dishesDatabase);
  })
  