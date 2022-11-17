var app = require('./app');
var mongoose = require('./conexDB/conn');

var port = 4200;
app.listen(port, ()=>{
    console.log("Backend se ejecuto correctamente");
});