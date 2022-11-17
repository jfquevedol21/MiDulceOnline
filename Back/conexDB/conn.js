const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/db_candyshop",{
    useNewUrlParser:true,
    //useCreateIndex:true,
    useUnifiedTopology:true,
    //useFindAndModify: false,
},(err,res)=>{
    if(err){
        throw err;
    }else{
        console.log('La conexion a la BD ha sido exitosa');
    }
});

module.exports=mongoose;

