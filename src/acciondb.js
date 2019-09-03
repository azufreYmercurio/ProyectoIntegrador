var conexion= require('./connections');

function metodosdb(){
    //Acciones de la base de datos
    this.seleccionar=function(respuesta){
    conexion.obtener(function(err,cn){
        cn.query('select * from usuarios',function(error,resultado){
         cn.relase();
         if(error){
             respuesta.send({estado: 'ERROR BD'})

         }else{
             respuesta,send(resultado);  


         }
        })
            
        
    }

    }
    //Seleccionar (devolvera los registros)


}
module.exports= new metodosdb();