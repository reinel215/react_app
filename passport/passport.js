const localStrategy = require('passport-local').Strategy;
const mysql = require('mysql');

var config=require('../database');
var conexionABaseDeDatos=mysql.createConnection(config);

module.exports= function(passport){
    passport.use(
        new localStrategy({
            usernameField: 'email'
        },
        (email,password,done) =>{
            var buscarCorreo="SELECT * FROM users where correo = '"+email+"'"
            conexionABaseDeDatos.query(buscarCorreo,function(err,result){
                if(err) throw err;
                console.log(result);
            })
        })
    );

}