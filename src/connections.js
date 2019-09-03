var mysql = require('mysql');
function Conexion(params) {
    this.pool=null;//utiliza para las concexiones

    this.iniciar=function(){
        this.pool=mysql.createPool({
            connectionLimit: 10 ,
            host:'localhost',
            user:'root',
            password:'',
            database:'integrador'
        })

            
        
    }
    this.obtener = function(callback){
        this.pool.getConnection(function(error,connection)){
            callback(error,connection)
        }
    }
}
module.exports = new Conexion();