const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send("Jennnnnnnnifer");
});

app.get("/", (req, res) => {
  console.log("we here bitch")
  res.render("homepage");
})

//////////////////////////////////////

////////////////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log("Listening");
})