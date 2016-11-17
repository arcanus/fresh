var express = require('express');
var router = express.Router();

router.get('/nuevo', function (req, res, next) {
    console.log('Se hizo un get a clientes/nuevo')
});

module.exports = router;
