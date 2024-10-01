var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('boton2'); // view /boton2
});

module.exports = router;
