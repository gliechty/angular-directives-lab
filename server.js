'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');

var db = require('./models');
// routes

// get all cards
app.get('/cards', function(req, res){
	db.Card.find(function(err, cards){
		if (err) {return console.log("index err: "+err);}
			res.json(cards);
	});
});

// get one card by ID
app.get('/cards/:id', function(req, res){
	db.Card.findById(req.params.id, function(err, card){
		if (err){return console.log("show err: "+err);}
			res.json(card);
	});
});


//create new card
app.post('/cards', function (req, res){
	console.log(req.body);
	var newCard = new db.Card(req.body);
	newCard.save(function(err, card){
		if (err) {return console.log("create err: "+err); }
		console.log("created", card);
		res.json({card:card});
	});
});

// delete card
app.delete('/cards/:id', function (req, res){
	var id = req.params.id;
	console.log(id);
	db.Card.remove({_id : id}, function(error){
		if(error) res.json({message: 'could not delete b/c' + error});
		res.json({message: "Successfully deleted"});
	}).select('-__v');
});

// static files

// app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/', function (req, res){
	res.sendFile(__dirname+"/public/index.html");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, function() {
	console.log('server started on', port);
});
