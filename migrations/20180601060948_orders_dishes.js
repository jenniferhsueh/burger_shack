exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.createTable('orders_dishes', function(table){
      table.increments('id').primary;
      table.integer('dishes_id');
      table.foreign('dishes_id').references('dishes.id');
      table.integer('orders_id');
      table.foreign('orders_id').references('orders.id');
    })
  ])
};

exports.down = function(knex, Promise) {  
  return Promise.all([
    knex.schema.dropTable('orders_dishes')
  ])
};