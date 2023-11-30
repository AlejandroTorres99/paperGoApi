// backend/routes/productos.js
const express = require('express');
const router = express.Router();

// Controladores de productos
router.get('/', (req, res) => {
  // Lógica para obtener todos los productos desde MongoDB
  res.send('Obtener todos los productos');
});

router.post('/', (req, res) => {
  // Lógica para agregar un nuevo producto a MongoDB
  res.send('Agregar un nuevo producto');
});

module.exports = router; // ¡Asegúrate de tener esta línea para exportar el router!
