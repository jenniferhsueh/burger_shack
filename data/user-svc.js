function makeUserService(knex){
  function getDishName(id){
    return knex('dishes')
      .where('id', id)
      .first('*');
  }
  //from restaurant message, in order to fulfil Ajax GET `/eta` request
  function getEta(id) {
    return knex('orders')
      .where('id', id)
      .select('eta')
      .catch((err) => {
        console.error('OUR ERROR', err);
      });
  }



  function getOrderId() {
    //EXPLAIN*******
    return knex('orders')
      .orderBy('id', 'desc')
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
