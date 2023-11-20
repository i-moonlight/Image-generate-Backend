var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const router = require("./routers/routes");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// app.use(express.json());

app.use("/api", router);

app.listen(3001, function () {
  console.log("This app listening on port 3001!");
});
