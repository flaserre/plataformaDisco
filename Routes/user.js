const express = require('express');
const router = express.Router();
const Usuario = require('../Models/user.js');

router.post('/user', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await user.findById(id).select('-contrasena');
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    console.error('Error al obtener usuario por id:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.put('/user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const usuarioActualizado = await user.findByIdAndUpdate(id, req.body, { new: true });
    if (!usuarioActualizado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuarioActualizado);
  } catch (error) {
    console.error('Error al editar usuario por id:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
