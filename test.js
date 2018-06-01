const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const msg = require("./send_sms.js");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send("Jennnnnnnnifer");
});

app.get("/twilio_science", (req, res) => {
  console.log("we here bitch")
  res.render("twilioButton");
});

app.get("/", (req, res) => {
  res.render("homepage");
});

app.post("/order", (req, res) => {
  msg(req.body.text); //sends to restaurant(jenn)
  res.redirect("/test");
})

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message(req.body.Body); //sends the msg jenn sends to twilio back to jenn - change to cust
  // console.log(req.body.From);
  res.writeHead(200, {"Content-Type": "text/xml"});
  res.end(twiml.toString());
})





app.listen(PORT, () => {
  console.log("Listening");
})