
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'Burger', price: 10},
        {id: 2, name: 'Fries', price: 5},
        {id: 3, name: 'Salad', price: 7}
      ]);
    });
};
