var db= require('./acciondb');
function http(){
    this.configuracion= function(app){
        app.get('./usuarios/',function(solicitud,respuesta){
            db.seleccionar(respuesta);

        })

    }

}
module.exports= new http();