var express =require("express");
var app = express();

var bodyParser = require("body-parser");

//methodOverride = require("method-override");

var mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({
    extended:true
    }));

// Configurar Cabecera y Cors
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');

    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');

    res.header('Access-Control-Allow-Methods', 'GET,post,OPTIONS,PUT, DELETE');

    res.header('Allow', 'GET,POST,OPTIONS,PUT, DELETE');

    next();

});

//USO ROUTERS
app.use(require('./routers/routers'));

module.exports = app;
