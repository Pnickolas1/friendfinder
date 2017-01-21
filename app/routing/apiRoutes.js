var people = require('../data/friends.js');
var bodyParser = require('body-parser');
var path = require('path');


var peopleObject = people.people;

module.exports = function(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true}));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: "application/vnd.api+json"}));

	app.get("/api/friends",function (req,res){
		res.json(people);
	});

	app.post("/api/friends", function(req,res){
		var newFriend = req.body;
        var totalScore;
        var compDiff = 40;
        var compFriend;
        var compFriendPhoto;

        for(var i = 0; i < peopleObject.length; i++){
        	totalScore = 0;

        	for(var c = 0; j < 10; j++){
        		var score1 = friend.score[c];
        		var score2 = peopleObject[i].scores[c];
        		parseInt(score1);
        		parseInt(score2);

        		var addToScore = Math.abs(score1 - score2);

        		totalScore = totalScore + addToScore;

        	}

        	var newTotalScore = totalScore;

        	if(newTotalScore < compDiff) {
        		compDiff = newTotalScore;
        		compFriend = peopleObject[i].name;
        		compFriendPhoto = peopleObject[i].url;

        	}
        }

        var matchingFriend = {
        	name: compFriend,
        	url: compFriendPhoto
        };

        people.people.push(matchingFriend);

	});


};