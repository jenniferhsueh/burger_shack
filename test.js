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
  res.send("Jennnnnnnnifer");
});

app.get("/twilio_button", (req, res) => {
  res.render("twilioButton");
});

app.get("/", (req, res) => {
  userService.getDishName(1) //
    .then((result) => {
      console.log(result);
    });
  res.render("homepage");
});

app.post("/order", (req, res) => {
  let custName = req.body.customerName;
  let custNumber = req.body.customerNum;
  userService.createOrder(custName, custNumber); //data gets inserted to orders table in db
  userService.getOrderId(msg.smsOrder); //get new order id
  // msg.smsOrder(`${custName}, ${custNumber}`); //sends to chibweeeeee
  console.log(custNumber, custName)
  res.end();
})

app.post("/sms", (req, res) => {
  // console.log('from sms', req.body);
  // const twiml = new MessagingResponse();
  let reply = req.body.Body; 
  let arr = reply.split(' ');
  let restNum = req.body.From;
  console.log(`restaurant number is ${restNum}`)
  msg.smsPickupTime(arr[1]);
  console.log(`ORDER_ID '${arr[0]}' PICKUP_TIME '${arr[1]}'`)
  //insert eta into db
  res.writeHead(200, {"Content-Type": "text/xml"});
})

//get the eta from database (endpoint will change to match data location)
app.get("/sms", (req, res) => {
  console.log('from sms endpoint', req.body)
  res.end()
})


app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
})