//DEPENDENCIES
var express = require("express");
var path = require("path");

// SETS UP EXPRESS APP - PT
var app = express();
var PORT = process.env.PORT || 4000;

//ROUTING
var apiRoutes = require('./app/routing/apiRoutes')(app);
var htmlRoutes = require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT );
});