const express = require('express');
const router = express.Router();
const Album = require('../Models/album.js');

router.post('/album', async (req, res) => {
  try {
    const nuevoAlbum = new Album(req.body);
    await nuevoAlbum.save();
    res.status(201).json({ mensaje: 'Álbum creado exitosamente' });
  } catch (error) {
    console.error('Error al crear álbum:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.put('/album/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const albumActualizado = await Album.findByIdAndUpdate(id, req.body, { new: true });
    if (!albumActualizado) {
      return res.status(404).json({ mensaje: 'Álbum no encontrado' });
    }
    res.json(albumActualizado);
  } catch (error) {
    console.error('Error al editar álbum:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.put('/album/:id/canciones', async (req, res) => {
  try {
    const id = req.params.id;
    res.status(501).json({ mensaje: 'Esta funcionalidad aún no ha sido implementada' });
  } catch (error) {
    console.error('Error al agregar o eliminar canción del álbum:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.get('/album', async (req, res) => {
  try {
    const albums = await album.find();
    res.json(albums);
  } catch (error) {
    console.error('Error al obtener todos los álbumes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.get('/album/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const album = await album.findById(id);
    if (!album) {
      return res.status(404).json({ mensaje: 'Álbum no encontrado' });
    }
    res.json(album);
  } catch (error) {
    console.error('Error al obtener álbum por id:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.delete('/album/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const albumEliminado = await album.findByIdAndDelete(id);
    if (!albumEliminado) {
      return res.status(404).json({ mensaje: 'Álbum no encontrado' });
    }
    res.json({ mensaje: 'Álbum eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar álbum por id:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
