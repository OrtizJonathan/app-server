const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
const requestMiddlewares = (req, res, next) => {
    console.log("CUERPASO", req);
    if (!req.body.rut || !req.body.celular || !req.body.correo || !req.body.renta) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'Campos insuficientes para realizar consulta'
        };
    }
    next();
}

// Middlewares
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(morgan('dev'));
app.use(express.json());
app.use(requestMiddlewares);

// Routes
app.use('/api', require('./routes/user.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});