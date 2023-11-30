// models/usuario.js

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  fotoPerfil: {
    type: String // Puedes almacenar la URL de la foto de perfil
  },
  edad: {
    type: Number
  },
  codigoPostal: {
    type: String
  },
  direccion: {
    type: String
  },
  correo: {
    type: String,
    required: true,
    unique: true
  },
  telefono: {
    type: String
  },
  tipoUsuario: {
    type: String,
    enum: ['standard', 'empresa'],
    default: 'standard'
  },
  tienePuntoVenta: {
    type: Boolean,
    default: false
  },
  RFC: {
    type: String,
    validate: {
      validator: function (v) {
        return this.tipoUsuario === 'empresa' ? !!v : true; // Si es empresa, se requiere el RFC
      },
      message: 'El RFC es requerido para usuarios de tipo empresa'
    }
  },
  password: {
    type: String,
    required: true
  }
  // Otros campos según las necesidades
});

module.exports = mongoose.model('Usuario', usuarioSchema);
