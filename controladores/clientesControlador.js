const clientesModelo = require('../modelos/clientesModelo');


// Registrar un nuevo cliente
const registrarCliente = (req, res) => {
    const clienteData = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        direccion: req.body.direccion || 'No proporcionada'
    };
    
    clientesModelo.registrarCliente(clienteData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al registrar' });
        }
        res.redirect('/login');
    });
};



// Recuperar contraseña
const recuperarContrasena = (req, res) => {
    const { correo, nueva_contrasena } = req.body;

    clientesModelo.actualizarContrasena(correo, nueva_contrasena, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar la contraseña' });
        }
        res.redirect('/login');
    });
};

module.exports = {
    registrarCliente,
    recuperarContrasena
};
