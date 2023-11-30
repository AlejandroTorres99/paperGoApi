// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');

// Configurar Express
const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/nombre_de_tu_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

// Rutas de la API
app.use('/api/productos', require('./routes/productos'));

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
