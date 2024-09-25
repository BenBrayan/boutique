const Reservas = require('../modelos/reservasModelo');

const reservasControlador = {
    // Método para manejar la solicitud POST del formulario
    crearReserva: (req, res) => {
        const nuevaReserva = {
            correo: req.body.correo,
            celular: req.body.celular,
            invitados: req.body.invitados,
            paquete: req.body.paquete,
            eventos: req.body.eventos,
            fecha: req.body.fecha,
            hora: req.body.hora
        };

        // Llamar al método del modelo para guardar en la base de datos
        Reservas.crearReserva(nuevaReserva, (resultado) => {
            // Redirigir o enviar una respuesta de éxito
            res.redirect('/reservar');
        });
    }
};

module.exports = reservasControlador;
