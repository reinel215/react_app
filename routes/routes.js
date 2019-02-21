const express = require('express');
const router = express.Router();
const controllers= require('../controllers/controllers');
const passport=require('passport');



router.get('/muestra',controllers.muestra);
router.post('/prueba',controllers.signUp);

router.post('/login',function(req, res, next) {
  passport.authenticate('local',(err,user,info)=>{
    req.logIn(user,function(err){
      if(err) return next(err);
      console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
      res.json({login: 0});
    })
    
  })(req, res, next);
});

module.exports = router;