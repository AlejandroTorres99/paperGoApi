// routes/productos.js

const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
  // Lógica para crear un nuevo producto en la base de datos
});

// Actualizar un producto (like, calificación, etc.)
router.put('/:id', async (req, res) => {
  // Lógica para actualizar un producto en la base de datos
});

// Eliminar un producto
router.delete('/:id', async (req, res) => {
  // Lógica para eliminar un producto de la base de datos
});

module.exports = router;
