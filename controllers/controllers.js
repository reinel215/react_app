const mysql = require('mysql');

var config=require('../database');
var conexionABaseDeDatos=mysql.createConnection(config);


module.exports= {
    signUp: function(req,res,next){
        let query="INSERT INTO users (correo,contrasenia,cedula,fecha_nacimiento) VALUES ('"+req.body.correo+"','"+req.body.contrasenia+"','"+req.body.cedula+"','"+req.body.fechaNacimiento+"')";                                      

       conexionABaseDeDatos.query(query,function(err,result){
            if(err) res.json(err);
            else res.json({ok: 0});
            console.log('se ha insertado un nuevo usuario');
        });

    } ,

    signIn: function(req,res,next){
        console.log("hola mundo");
    },

    muestra: function(req,res,next){
        let query="SELECT * FROM users";
        conexionABaseDeDatos.query(query,function(err,result){
            if(err) throw err;
            console.log(result);
        });
    }
}