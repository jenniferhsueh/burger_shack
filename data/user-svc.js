function makeUserService(knex){
  function getDishName(id){
    return knex('dishes')
      .where('id', id)
      .first('*');
  }
  function getEta(eta) {
    return knex('orders_dishes')
      .where('eta', eta)
      .first('*');
  }
  function getOrderId(id) {
    console.log(id)
    return knex('orders')
      .where('id', id)
      .first('*');

  }

  return {
    getDishName,
    getEta,
    getOrderId
  }
}


module.exports = makeUserService;
