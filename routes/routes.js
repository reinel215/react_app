const express = require('express');
const router = express.Router();
const controllers= require('../controllers/controllers');
const passport=require('passport');
const path = require('path');


//muestra todos los objetos en la base de datos
router.get('/muestra',controllers.muestra);

//devuelve el correo y la cedula del usuario
router.get('/inside',controllers.InformacionDeUsuarioParaPaginaDeInicio);


//post para el registro
router.post('/prueba',controllers.signUp);


//post para el inicio de session
router.post('/login',function(req, res, next) {
  passport.authenticate('local',(err,user,info)=>{


    req.logIn(user,function(err){
      if(err) return next(err);
      res.json({success: 1});
    })


    
  })(req, res, next);
});


module.exports = router;