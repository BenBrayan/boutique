const db = require('../config/db');  
exports.crearReserva = (nuevaReserva, callback) => {
    debugger;
    const sql = `INSERT INTO reserva (correo, celular, invitados, paquete, fecha, hora, eventos) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const { correo, celular, invitados, paquete ,fecha, hora, eventos } = nuevaReserva;

    db.query(sql, [correo, celular, invitados, paquete, fecha, hora, , eventos], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};
