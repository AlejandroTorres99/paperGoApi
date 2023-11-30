// routes/preferidos.js

const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const Producto = require('../models/producto');

// Añadir producto a favoritos
router.post('/agregar', async (req, res) => {
  // Lógica para agregar un producto a la lista de productos favoritos del usuario
});

// Ver productos favoritos
router.get('/', async (req, res) => {
  // Lógica para obtener los productos favoritos del usuario
});

// Eliminar producto de favoritos
router.delete('/:id', async (req, res) => {
  // Lógica para eliminar un producto de la lista de productos favoritos del usuario
});

module.exports = router;
