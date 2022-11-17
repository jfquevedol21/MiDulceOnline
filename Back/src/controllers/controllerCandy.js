const Candy = require("../models/candy");

function prueba(req, res) {
    res.status(200).send({
        message: 'Prueba de INICIO CORRECTO del Controlador'
    });
}


//CONTROLLERS DEL CRUD DE LA COLLETION RUTAS
function guardarCandy(req, res) {
    //INJECTAR UNA PROMISE
    var myCandy = new Candy(req.body);
    myCandy.save((err, result) => {
        res.status(200).send({
            message: result
        });
    });
}

function buscarData(req, res) {
    var idRuta = req.params.id;
    Candy.findById(idRuta).exec((err, result) => {
        if (err) {
            res.status(500).send({ message: 'Error desde Backend al ejecutar la peticion' });
        } else {
            if (!result) {
                res.status(404).send({ message: 'Error en el envio de parametros desde el frontend' });
            } else {
                res.status(200).send({ message: result });
            }
        }
    });
}

function listarAllData(req, res) {
    var idCandy = req.params.id;
    if (!idCandy) {
        var result = Candy.find({}).sort('nombre');
    } else {
        var result = Candy.find({ _id: idCandy }).sort('nombre');
    }

    result.exec(function (err, result) {
        if (err) {
            res.status(500).send({ message: 'Error desde Backend al ejecutar la peticion' });
        } else {
            if (!result) {
                res.status(404).send({ message: 'Error en el envio de parametros desde el frontend' });
            } else {
                res.status(200).send({ result });
            }
        }
    });
}

function updateCandy(req, res) {
    var idCandy = req.params.id;
    Candy.findOneAndUpdate({ _id: idCandy }, req.body, { new: true },
        function (err, Candy) {
            if (err)
                res.send(err)
            res.json(Candy)
        });
}

function deleteCandy(req, res){
    var idCandy = req.params.id;
    Candy.deleteOne({_id: idCandy}).then(function(){
        console.log("Data deleted"); // Success
        res.status(200).send({
            message: "Eliminado con exito"
        });
    }).catch(function(error){
        res.status(400).send({
            message: "ERROR"
        });
    });
}

//FIN

//EXPORT->
module.exports = {
    prueba,
    guardarCandy,
    buscarData,
    listarAllData,
    updateCandy,
    deleteCandy
};