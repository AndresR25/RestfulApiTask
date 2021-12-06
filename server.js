var express = require("express");
var app = express();

var bodyParser = require("body-parser");

var mongoose = require("mongoose");


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


mongoose.connect("mongodb://localhost/API_db");

require("./config/database");
require("./config/routes")(app);


app.listen(8000, function(){

    console.log("port: 8000");
    
})