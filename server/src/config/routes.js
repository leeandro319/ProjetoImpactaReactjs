const express = require('express');

module.exports = function( server ){
    const router = express.Router();
    server.use('/api', router);

    const cursos = require('../api/cursos/service');
    const contatos = require('../api/contato/service');

    cursos.register(router, '/cursos');
    contatos.register(router, '/contatos');
}