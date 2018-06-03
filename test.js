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
  console.log("we here bitch");
  res.render("twilioButton");
});

app.get("/", (req, res) => {
  userService.getDishName(1)
    .then((result) => {
      // console.log(result);
    });
  res.render("homepage");
});

app.post("/order", (req, res) => {
  let textToRest = req.body.customerMsg;
  let custName = req.body.customerName;
  msg(`New order from ${custName}, ${textToRest}`); //sends to chibweeeeee
  console.log(textToRest, custName)
  res.end();
})

app.post("/sms", (req, res) => {
  // console.log('from sms', req.body);
  // const twiml = new MessagingResponse();
  let reply = req.body.Body;
  let arr = reply.split(' ');
  console.log(arr)
  // console.log(req.body.Body);
  //Send req.body.Body to knex db
  res.writeHead(200, {"Content-Type": "text/xml"});
  // res.end(twiml.toString());
})





app.listen(PORT, () => {
  console.log("Listening");
})