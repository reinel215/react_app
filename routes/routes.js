const express = require('express');
const router = express.Router();

//consultamos la base datos

router.get('/',(req,res) => {
    res.json({
        'status':'bueno'
    });
});

module.exports = router;