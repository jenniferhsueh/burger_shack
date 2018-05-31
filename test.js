const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let eatERS = function (req, res, next) {
  req.eatERS = "Tacos";
  next();
}

app.use(eatERS);

app.get("/", (req, res) => {
  let eatERS = req.eatERS
  let 
  res.send(eatERS);
});

app.listen(PORT, () => {
  console.log("Listening");
})