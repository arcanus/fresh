var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  nombre: { type: String, required: true},
  email: { type: String, required: true},
  telefono: { type: String, },
  perfil_facebook: { type: String, },
  ciudad: { type: String, }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Cliente', schema);
