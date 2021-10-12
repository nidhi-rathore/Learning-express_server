//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello World!!</h1>");
});

app.get("/contacts", function(req, res) {
    res.send("Contact Me at nidhirathore@gmail.com");
});

app.get("/about", function (req, res){
    res.send("<h1>I am Nidhi Rathore</h1><br> <h2>I am a 2nd year student at USICT, GGSIPU</h2>");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Code</li><li>Movies</li><li>Talking</li></ul>");
});

app.listen(3000, function(){
    console.log("Server started on 3000");
});