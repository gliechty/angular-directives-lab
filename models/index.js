var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cards-app");

module.exports.Card = require("./card.js");
