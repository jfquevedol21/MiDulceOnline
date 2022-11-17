var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var candySchema = Schema({
        nombre: String,
        precio: Number,
        enstock: Number
});

const candy = mongoose.model('candy',candySchema);
module.exports = candy;

