var express = require('express');
var router = express.Router();

var Cliente = require('../models/cliente');

router.post('/nuevo', function (req, res, next) {
      var cliente = new Cliente({
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono,
      perfil_facebook: req.body.perfil_facebook,
      ciudad: req.body.ciudad
    });
    cliente.save(function(err, result){
      if (err) {
        return res.status(500).json({
          title: "Error guardando el cliente.",
          error: err
        });
      }
      res.status(201).json({
        title: 'Cliente dado de alta correctamente',
        obj: result
      });
    });
});

module.exports = router;
