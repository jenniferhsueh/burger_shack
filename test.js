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

app.get("/", (req, res) => {
  console.log("we here bitch")
  res.render("twilioButton");
})

app.post("/order", (req, res) => {
  msg(req.body.text);
  res.redirect("/test");
})

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();
  console.log(req.body.Body);
  console.log(req.body.FromCountry);
  twiml.message(req.body.Body);
  res.writeHead(200, {"Content-Type": "text/xml"});
  res.end(twiml.toString());
})

app.listen(PORT, () => {
  console.log("Listening");
})