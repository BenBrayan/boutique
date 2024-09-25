const express = require('express');
const router = express.Router();
const loginController = require('../controladores/loginControler');;

// Ruta para inicio de sesión
router.post('/autenticacion', (req, res) => {
    debugger
    const { correo, contrasena } = req.body;

    if (!correo || !contrasena) {
        return res.status(400).json ({ message: 'Correo y contraseña son requeridos.' });
    }

    loginController.autenticarCliente(correo, contrasena, (err, cliente) => {
        debugger
        if (err) {
            console.error('Error autenticando cliente:', err);
            return res.status(500).json({ message: 'Error en el servidor.' });
        }
        if (!cliente) {
            return res.redirect('/login.html');
        }

        // Aquí podrías establecer una sesión o token
        // res.status(200).json({ message: 'Inicio de sesión exitoso.' });
        res.redirect('/index.html'); 
    });
});



module.exports = router;
