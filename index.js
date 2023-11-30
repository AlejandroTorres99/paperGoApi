// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const productosRouter = require('./routes/productos'); 

const app = express();

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

// Middleware para procesar solicitudes JSON
app.use(express.json());

// Rutas y middlewares aquí...
app.use('/productos', productosRouter);

// Puerto en el que correrá el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
