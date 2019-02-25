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


    muestra: function(req,res,next){
        let query="SELECT * FROM users";
        conexionABaseDeDatos.query(query,function(err,result){
            if(err) throw err;
            console.log(result);
        });
    },


    InformacionDeUsuarioParaPaginaDeInicio: function(req,res,next){
        console.log(req.session.passport);
        res.json({
            correo: req.session.passport.user[0].correo,
            cedula: req.session.passport.user[0].cedula
        })
    }
}