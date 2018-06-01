
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').returning('*').insert([
        {name: 'Burger', price: 10.99},
        {name: 'Fries', price: 5.99},
        {name: 'Salad', price: 7.50},
        {name: 'Poutine', price: 6.50},
        {name: 'Nachos', price: 12.99},
        {name: 'Sandwich', price: 9.99},
        {name: 'Pop', price: 2},
        {name: 'Juice', price: 2}
      ]);
    });
};
