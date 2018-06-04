function makeUserService(knex){
  function getDishName(id){
    return knex('dishes')
      .where('id', id)
      .first('*');
  }
  //from restaurant message, in order to fulfil Ajax GET `/eta` request
  function getEta(eta) {
    return knex('orders_dishes')
      .where('eta', eta)
      .first('*');
  }



  function getOrderId(message) {
    //EXPLAIN*******
    return knex('orders')
      .orderBy('id', 'desc')
      .then(function(rows) {
        console.log("FIRST ROWWW", rows[0].id);
         message(`${rows[0].id}, ${rows[0].name}, ${rows[0].phone_number}`);
      })
      .catch((err) => {
        console.error('OUR ERROR', err);
      });
  }
  function createOrder (name, phone_number) {
    return knex('orders')
      .insert({
        'name' : name,
        'phone_number' : phone_number
      })
      .then(() => {
        console.log('success! order placed');
      })
      .catch((err) => {
        console.error('OUR ERROR', err);
      });
  }
  function updateEta(id, eta) {
    return knex("orders")
      .where('id', id)
      .update({
        'eta' : eta
      })
      .then(() => {
        console.log("PICKUP TIME IS", eta);
      })
      .catch((err) => {
        console.error('OUR ERROR', err);
      });
  }

  return {
    getDishName,
    getEta,
    getOrderId,
    createOrder,
    updateEta
  }
}

module.exports = makeUserService;
