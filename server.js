'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');

var db = require('./models');

// var questionList = [
// {
// "_id": "578414ae4dda540700250522",
// "question": "What is Superman's guilty pleasure?",
// "answer": "Ben Affleck",
// "answerHidden": true,
// "__v": 0
// },
// {
// "_id": "578414ae4dda540700250523",
// "question": "I'm sorry I couldn't finish my homework...",
// "answer": "the dog ate my laptop!",
// "answerHidden": true,
// "__v": 0
// },
// {
// "_id": "578414ae4dda540700250524",
// "question": "I get by with a little help from _________.",
// "answer": "John Cena!",
// "answerHidden": true,
// "__v": 0
// },
// {
// "_id": "578414ae4dda540700250525",
// "question": "_________ -- It's a trap!",
// "answer": "JAVASCRIPT???",
// "answerHidden": true,
// "__v": 0
// },
// {
// "_id": "578414ae4dda540700250526",
// "question": "The class field trip was completely ruined by _________.",
// "answer": "the guy in a clown suit",
// "answerHidden": true,
// "__v": 0
// },
// {
// "_id": "578414ae4dda540700250527",
// "question": "What's my secret power?",
// "answer": "ngAnimate",
// "answerHidden": true,
// "__v": 0
// },
// {
// "_id": "578414ae4dda540700250528",
// "question": "Why are there so many songs about rainbows?",
// "answer": "Leprachauns",
// "answerHidden": true,
// "__v": 0
// },
// {
// "_id": "578414ae4dda540700250529",
// "question": "Where do babies come from?",
// "answer": "Netflix and Chill",
// "answerHidden": true,
// "__v": 0
// },
// {
// "_id": "578414ae4dda54070025052a",
// "question": "How do we do auth in Angular with Satellizer?",
// "answer": "I'm glad you asked.",
// "answerHidden": true,
// "__v": 0
// },
// {
// "_id": "57f7e8226ac3a7030096e014",
// "question": "What's the worst thing about a SQL database?",
// "answer": "It's hard to relate",
// "answerHidden": true,
// "__v": 0
// },
// {
// "_id": "57fc541bd5c33903005a8cad",
// "question": "Why did the chicken cross the playground?",
// "answer": "To get to the other slide",
// "answerHidden": true,
// "__v": 0
// }
// ];

// routes

app.get('/', function(req, res){
	db.Card.find(function(err, cards){
		if (err) {return console.log("index err: "+err)}
			res.json(cards);
	});
});

app.get('/:id', function(req, res){
	var questionID = req.params.id;
	for (var i=0; i<questionList.length; i++){
		if (questionList[i]._id == questionID){
			res.json(questionList[i]);
		}
	}
});

app.post('/', jsonParser, function (req, res){
	questionList.push(req.body);
	res.json(req.body);
});

// static files

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res){
	res.sendFile(__dirname+"/public/index.html");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, function() {
	console.log('server starterd on', port);
});
