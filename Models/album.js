const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


const albumSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'Por favor, ingresa el título del álbum.']
  },
  descripcion: {
    type: String,
    required: [true, 'Por favor, ingresa la descripción del álbum.'],
    minlength: [5, 'La descripción debe tener al menos 5 caracteres.'],
    maxlength: [200, 'La descripción no puede tener más de 200 caracteres.']
  },
  ano: {
    type: Number,
    required: [true, 'Por favor, ingresa el año de lanzamiento del álbum.'],
    min: [1, 'El año de lanzamiento debe ser mayor que cero.']
  },
  canciones: [String],
  portada: String
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;