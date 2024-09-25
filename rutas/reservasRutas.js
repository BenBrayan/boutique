const express = require('express');
const router = express.Router();
const reservasModelo = require ('../modelos/reservasModelo');

// Ruta para registrar una nueva reserva
router.post('/', (req, res) => {
    const { correo, celular, invitados, paquete, eventos, fecha, hora} = req.body;

    // Verificar que todos los campos estén completos
    if (!correo || !celular || !invitados || !paquete || !eventos || !fecha || !hora ) {
        return res.status(400).json({ message: 'Todos los campos son requeridos.' });
    }

    // Crear el objeto reserva con los datos proporcionados
    const nuevaReserva = {
        correo,
        celular,
        invitados,
        paquete,
        eventos,
        fecha,
        hora
    };

    // Registrar la reserva en la base de datos
    reservasModelo.crearReserva(nuevaReserva, (err, result) => {
        if (err) {
            console.error('Error registrando la reserva:', err);
            return res.status(500).json({ message: 'Error en el servidor.' });
        }

        // Enviar respuesta exitosa
        res.status(200).json({ message: 'Reserva registrada con éxito.' });
    });
});

module.exports = router;
