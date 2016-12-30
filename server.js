'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');

app.use(bodyParser.json());

app.get('/', function (req, res){
	res.sendFile(__dirname+"/public/index.html");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, function() {
	console.log('server started on', port);
});

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
	// console.log(req);
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
	db.Card.remove({_id : id}, function(error){
		if(error) res.json({message: 'could not delete b/c' + error});
		res.json({message: "Successfully deleted"});
	}).select('-__v');
});

// update card
app.patch('/cards/:id', function (req, res){
	  var id = req.params.id;
	  db.Card.findById({_id: id}, function(error, card) {
	    if(error) res.json({message: 'Could not find card b/c:' + error});
	    if(req.body.question) card.question = req.data.question;
	    if(req.body.answer) card.answer = req.data.answer;

	    card.save(function(error) {
      if(error) res.json({messsage: 'Could not update card b/c:' + error});

      res.json({message: 'Card successfully updated', card: card});
    });
	console.log('backend' + card);
  }).select('-__v');
});










