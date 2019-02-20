const express = require('express');
const router = express.Router();
const controllers= require('../controllers/controllers');
const passport=require('passport');



router.get('/muestra',controllers.muestra);
router.post('/prueba',controllers.signUp);

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

module.exports = router;