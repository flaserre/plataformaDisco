const mongoose = require('mongoose');
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const userModel = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return v.length >= 2;
      },
      message: 'Ingrese mas de dos caracteres'
    }
  },
  apellido: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return v.length >= 2;
      },
      message: 'Ingrese mas de dos caracteres'
    }
  },
  mail: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return regex.test(v);
      },
      message:  'Ingrese un mail valido'
    },
  },
  contrasena: String,
  favoritos: [String]
});

const Usuario = mongoose.model('Usuario', userModel);

module.exports = Usuario;