$(document).ready(function() {
  
  console.log($(".order"));

  $("form").on("submit", function(event) {
    event.preventDefault(); //prevents pg from refreshing (jquery)
    console.log(event.target);
    let order = $(this).serialize();
    console.log(order);
    placeOrder(order);
  });
  
  let orderSent = $(`<h3>`).addClass("text-success").text(`Your order has been placed`);

  function placeOrder(order) {
    $.ajax({ //makes an http requst 
      url: "/order", //use this route to send text
      method: "POST", 
      data: order,
      success: function() {
        $(".checkout-items").empty(); //empty the cart
        $(".checkout").append(orderSent)
      },
      error: function(err) {
        console.log(err);
      }
    });
  };
})