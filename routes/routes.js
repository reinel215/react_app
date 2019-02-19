const express = require('express');
const router = express.Router();
const controllers= require('../controllers/controllers');
//consultamos la base datos


router.get('/muestra',controllers.muestra);
router.post('/prueba',controllers.signUp);
router.post('/login',controllers.signIn);


module.exports = router;