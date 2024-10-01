var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('boton3'); // view /boton3
});

module.exports = router;