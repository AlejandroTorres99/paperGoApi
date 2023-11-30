// routes/usuarios.js

const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Función para generar un token JWT
const generarToken = (usuario) => {
  return jwt.sign({ id: usuario._id, email: usuario.email }, 'clave_secreta', { expiresIn: '24h' });
};

// Registro de usuario
router.post('/registro', async (req, res) => {
  try {
    const usuarioExistente = await Usuario.findOne({ correo: req.body.correo });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const nuevoUsuario = new Usuario({
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      fotoPerfil: req.body.fotoPerfil,
      edad: req.body.edad,
      codigoPostal: req.body.codigoPostal,
      direccion: req.body.direccion,
      correo: req.body.correo,
      telefono: req.body.telefono,
      tipoUsuario: req.body.tipoUsuario,
      tienePuntoVenta: req.body.tienePuntoVenta,
      RFC: req.body.tipoUsuario === 'empresa' ? req.body.RFC : undefined, // Agregar el RFC si es empresa
      password: hashedPassword
      // Otros campos según las necesidades
    });

    const usuarioGuardado = await nuevoUsuario.save();
    const token = generarToken(usuarioGuardado);
    res.status(201).json({ usuario: usuarioGuardado, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Iniciar sesión de usuario y generar token JWT
router.post('/login', async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ email: req.body.email });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const contraseñaValida = await bcrypt.compare(req.body.contraseña, usuario.contraseña);
    if (!contraseñaValida) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = generarToken(usuario);
    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener información del usuario (ejemplo)
router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
