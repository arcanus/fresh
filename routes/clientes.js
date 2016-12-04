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

router.get('/lista', function (req, res, next) {
      Cliente.find()
          .exec(function(err, clientes) {
            if (err) {
              return res.status(500).json({
                title: "Error recuperando los clientes.",
                error: err
              });
            }
            res.status(200).json({
              title: 'Clientes recuperados con exito.',
              obj: clientes
            });
          });
});

router.delete('/:id', function (req, res, next) {
      Cliente.findById(req.params.id, function(err, cliente) {
        if (err) {
          return res.status(500).json({
            title: 'Ha ocurrido un error',
            error: err
          });
        }
        if (!cliente) {
          return res.status(500).json({
            title: 'No se ha encontrado el cliente',
            err: {message: 'No se ha encontrado el cliente'}
          });
        }
        cliente.remove(function (err, result) {
          if (err) {
            return res.status(500).json({
              title: 'Ha ocurrido un error',
              error: err
            });
          }
          res.status(200).json({
            message: 'Se ha eliminado el cliente',
            obj: result
          });
        });
      });
});

module.exports = router;
