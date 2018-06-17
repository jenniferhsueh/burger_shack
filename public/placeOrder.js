$(document).ready(function() {
  
  console.log($(".order"));

  $("form").on("submit", function(event) {
    event.preventDefault(); //prevents pg from refreshing (jquery)
    console.log(event.target);
    let order = $(this).serialize();
    console.log(order);
    placeOrder(order);


    let etaCheck = setInterval(function getEta() {
      $.ajax({
        url: "/orders/eta",
        method: "GET",
        success: function (eta) {
          console.log("ETA",eta)
          if(!eta) {
            console.log("Waiting on pickup time. It is now:",eta);
          } else {
            let etaSent = $(`<h2>`).addClass("text-light text-center").text(`Pick up your order in ${eta} minutes`);
            console.log("LOG: order eta is",eta);
            $(".eta-space").append(etaSent)
            clearInterval(etaCheck)
            // stopGetEta(); //need to stop polling when eta is received.
          }
        },
        error: function(err) {
          console.log(err);
        }
      })
  }, 5000);
  });
  
  // let stopGetEta = function () {
  //   clearInterval(getEta)
  // }

  // let orderSent = $(`<h3>`).addClass("text-success").text(`Your order has been placed`);

  function placeOrder(order) {
    $.ajax({ //makes an http requst 
      url: "/order", //use this route to send text
      method: "POST", //goes to test.js - finds this method/route
      data: order,
      success: function() {
        let orderSent = $(`<h2>`).addClass("text-success").text(`Your order has been placed`)
        // $(".checkout-items").empty(); //empty the cart
        $(".eta-space").append(orderSent);
        $(".custInput").val("");
        etaCheck;
      },
      error: function(err) {
        console.log(err);
      }
    });
  };
})