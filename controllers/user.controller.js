const fs = require('fs');
const userCtrl = {};


userCtrl.createConsult = async (req, res) => {
    fs.appendFile(Date.now().toString() + '.txt', 'rut:' + req.body.rut + ' celular:' + req.body.celular +
        ' correo:' + req.body.correo + ' renta:' + req.body.renta, (error) => {
            if (error) {
                throw error;
            }
        })
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Consulta Realizada',
    };
    res.send(respuesta);
};

module.exports = userCtrl;