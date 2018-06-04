$(document).ready(function() {
  
  console.log($(".order"));

  $("form").on("submit", function(event) {
    event.preventDefault(); //prevents pg from refreshing (jquery)
    console.log(event.target);
    let order = $(this).serialize();
    console.log(order);
    placeOrder(order);
  });
  
  let getEta = function () {
    setInterval(() => {
      $.ajax({
        url: "/sms",
        method: "GET",
        success: function (eta) {
          let etaSent = $(`<h3>`).addClass("text-light").text(`Pick up your order in ${eta} `);
          console.log("LOG: order eta is",eta);
          $(".checkout").append(etaSent)
          stopGetEta(); //need to stop polling when eta is received.
        },
        error: function(err) {
          console.log(err);
        }
      });
    }, 5000);
  }
  
  let stopGetEta = function () {
    clearInterval(getEta)
  }

  // let orderSent = $(`<h3>`).addClass("text-success").text(`Your order has been placed`);

  function placeOrder(order) {
    $.ajax({ //makes an http requst 
      url: "/order", //use this route to send text
      method: "POST", //goes to test.js - finds this method/route
      data: order,
      success: function() {
        let orderSent = $(`<h3>`).addClass("text-success").text(`Your order has been placed`)
        $(".checkout-items").empty(); //empty the cart
        $(".checkout").append(orderSent)
        
      },
      error: function(err) {
        console.log(err);
      }
    });
  };
})