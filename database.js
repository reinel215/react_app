const mysql = require('mysql');


var connect=mysql.createConnection({
    'host': 'localhost',
    'user': 'reinel',
    'password': '04168122812Raag*',
    'database': 'prueba'
});

connect.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connect.query("SELECT * FROM tabla_usuarios where id_usuario = '1'", function(err,results,fields){
        if (err) throw err;
        console.log(results);
        connect.end();
    })
});




module.exports = {
    saludo : function(req,res){
        res.send('hola mundo');
    }


}