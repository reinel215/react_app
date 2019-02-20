const localStrategy = require('passport-local').Strategy;
const mysql = require('mysql');

var config=require('../database');
var conexionABaseDeDatos=mysql.createConnection(config);

module.exports= function(passport){

    passport.serializeUser(function(user, done) {
		done(null,user);
    });

    
    passport.deserializeUser(function(user, done) {
        let correo=user.correo;
		conexionABaseDeDatos.query("select * from users where correo = "+correo,function(err,rows){
            if (err) return done(null,err);

			done(null, rows[0]);
		});
    })






    passport.use(
        new localStrategy({
            usernameField: 'correo'
        },
        (email,password,done) =>{
            console.log(email+" "+password)
            var buscarCorreo="SELECT * FROM users where correo = '"+email+"'";
            conexionABaseDeDatos.query(buscarCorreo,function(err,result){
                if(err) throw err;

                //si no existe el correo
                if (!result.length) return done(null,false);

                //si la contraseña es igual
                if(password==result[0].contrasenia){
                    return done(null,result);
                }else return done(null,false);
                
            })
        })
    );

}