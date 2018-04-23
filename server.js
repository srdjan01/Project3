// Requiring our models for syncing //added this to server
// var db = require("./models");  

var request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "test" }));

app.set("view engine", "handlebars");


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
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

app.get("/userSubmit", function(req, res) {
    res.sendFile(path.join(__dirname, "./userSubmit.html"));
});

app.get("/trainerSubmit", function(req, res) {
    res.sendFile(path.join(__dirname, "./trainerSubmit.html"));
});

app.use(express.static('images'));


require("./routes/api-routes.js")(app);       //////added these to server.js
require("./routes/html-routes.js")(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {



    app.listen(PORT, function() {
        console.log("App now listening at localhost:" + PORT);
    });
});




