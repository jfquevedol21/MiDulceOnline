const { Router}=require('express');
const router = Router();

//DEFINIR LOS ACCESOS A LOS CONTROLLERS
var controllerRuta = require('../src/controllers/controllerCandy');


//DEFINIR LOS ENDPOINT
router.get('/test',controllerRuta.prueba);
router.post('/crear',controllerRuta.guardarCandy);
router.get('/buscar/:id',controllerRuta.buscarData);
router.get('/buscarall/:id?',controllerRuta.listarAllData);
router.put('/actualizar/:id',controllerRuta.updateCandy);
router.delete('/borrar/:id',controllerRuta.deleteCandy)

module.exports=router;