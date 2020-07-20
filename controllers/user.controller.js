const fs = require('fs');
const userCtrl = {};

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

userCtrl.createConsult = async (req, res, next) => {
    if(!req.body.rut || !req.body.celular || !req.body.correo || !req.body.renta) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'Campos insuficientes para realizar consulta'
        };
    } else {
        fs.appendFile(Date.now().toString()+'.txt','rut:'+req.body.rut+' celular:'+req.body.celular+
        ' correo:'+req.body.correo+' renta:'+req.body.renta, (error) => {
            if(error) {
                throw error;
            }
        })
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Consulta Realizada',
        };
    }
    res.send(respuesta);
};

module.exports = userCtrl;