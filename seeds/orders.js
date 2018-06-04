
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').returning('*').insert([
        {name: 'Paulina', phone_number: '604-272-9325', eta: null},
        {name: 'Chibwe', phone_number: '604-217-7338', eta: null},
        {name: 'Jennifer', phone_number: '604-315-1860', eta: null}
      ]);
    });
};
