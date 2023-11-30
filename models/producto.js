// models/producto.js

const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  stock: {
    type: String,
    required: true
  },
  tumbail: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  discountPercentaje: {
    type: Number,
    required: false
  },
  imagenes: {
    type: [String],
    required: true
  },
  categoria: {
    type: String,
    enum: ['Accesorios', 'Sacapuntas', 'Juego de geometría', 'Libreta/cuaderno', 'Correctores', 'Goma de borrar', 'Lápices', 'Bolígrafo'],
    default: 'Otro'
  },
  likes: {
    type: Number,
    default: 0
  },
  calificacion: {
    type: Number,
    default: 0
  },
  // Otros campos según las necesidades de tu aplicación
});

module.exports = mongoose.model('Producto', productoSchema);
