
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').returning('*').insert([
        {name: 'Paulina', phone_number: '604-272-9325'},
        {name: 'Chibwe', phone_number: '604-217-7338'},
        {name: 'Jennifer', phone_number: '604-315-1860'}
      ]);
    });
};
