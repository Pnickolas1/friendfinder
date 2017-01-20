//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// SETS UP EXPRESS APP - PT
var app = express();
var PORT = 4000;


//SETS UP THE EXPRESS APP TO HANDLE DATA PARSING

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get("/routing", function(req,res){
	res.sendFile(path.join(__dirname, "survey.html"));
});

app.listen(PORT, function () {
	console.log("App listening on PORT" + PORT );
});