
var request = require("request");

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "test" }));

app.set("view engine", "handlebars");


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./test.html"));
});


app.get("/userLogin", function(req, res) {
   
   res.sendFile(path.join(__dirname, "./userLogin.html"));
});

app.get("/trainerLogin", function(req, res) {
    res.sendFile(path.join(__dirname, "./trainerLogin.html"));
});

app.get("/contactUs", function(req, res) {
    res.sendFile(path.join(__dirname, "./contactUs.html"));
});

app.get("/aboutUs", function(req, res) {
    res.sendFile(path.join(__dirname, "./aboutUs.html"));
});

// app.get("/trainerLogin", function(req, res) {
//     res.sendFile(path.join(__dirname, "./trainerLogin.html"));
// });

// app.get("/trainerCreate", function(req, res) {
//     res.sendFile(path.join(__dirname, "./trainerCreate.html"));
// });

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});







