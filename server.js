const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const msg = require("./send_sms.js");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);
const userService = require('./data/user-svc')(knex);

app.get("/test", (req, res) => {
  res.send("testing");
});

app.get("/twilio_button", (req, res) => {
  res.render("twilioButton");
});

app.get("/", (req, res) => {
  res.render("homepage");
});

app.post("/order", (req, res) => {
  let custName = req.body.customerName;
  let custNumber = req.body.customerNum;
  userService.createOrder(custName, custNumber); //data gets inserted to orders table in db
  userService.getOrderId().then(function(rows) {
    console.log("FIRST ROWWW", rows[0].id);
    msg.smsOrder(`${rows[0].id}, ${rows[0].name}, ${rows[0].phone_number}`);
  }); //get new order id
  // msg.smsOrder(`${custName}, ${custNumber}`); //sends to chibwe
  console.log(custNumber, custName)
  res.end();
})

app.post("/sms", (req, res) => {
  // console.log('from sms', req.body);
  // const twiml = new MessagingResponse();
  let reply = req.body.Body; //full reply
  let arr = reply.split(' '); //full reply being split
  let orderId = arr[0];
  let pickUpTime = arr[1];
  let restNum = req.body.From;
  console.log(`restaurant number is ${restNum}`)
  msg.smsPickupTime(pickUpTime);
  userService.updateEta(orderId, pickUpTime)
  console.log(`ORDER_ID '#${orderId}' PICKUP_TIME '${pickUpTime}'`)
  //insert eta into db
  res.writeHead(200, {"Content-Type": "text/xml"});
})

//get the eta from database (endpoint will change to match data location)
app.get("/orders/eta", (req, res) => {
  userService.getOrderId().then(function(data){
    if(!data[0].eta) {
      res.end();
    } else {
      res.send(data[0].eta.toString());
      console.log('CURRENT ETA',data[0].eta);
      
      if(!data[0].eta) {
        userService.deleteEta(id);
      }
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
})