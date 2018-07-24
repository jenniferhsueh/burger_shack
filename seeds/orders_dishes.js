exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders_dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders_dishes').returning('*').insert([
        {dishes_id: 1, orders_id: 1},
        {dishes_id: 2, orders_id: 1},
        {dishes_id: 8, orders_id: 1},
        {dishes_id: 2, orders_id: 2},
        {dishes_id: 7, orders_id: 3},
        {dishes_id: 4, orders_id: 3},
        {dishes_id: 6, orders_id: 3}
      ]);
    });
};
