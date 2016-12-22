'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res){
	res.send("you're home");
});

app.listen(port, function() {
	console.log('server starterd on', port);
})
