const express = require("express");
const routes = express.Router();

const crypto = require("crypto");


routes.get('/', ( request , response ) => {
    return response.send('Fala Meu Champs');
});

routes.get('/signup', ( request , response ) => {
    const { username,  }
    const id = crypto.randomBytes(8).toString('HEX');

    return response.send('Oxi, seja bem vindx Meu Champs!');
});

routes.get('/login', ( request , response ) => {
    return response.send('Ora Ora voltou Meu Champs?');
});

routes.get('/failed_login', ( request , response ) => {
    return response.send('Falhou ai hein Meu Champs');
});

routes.get('/my_dashboard', ( request , response ) => {
    return response.send('Fala Minhas Plataformas');
});
routes.get('/pass/:id', ( request , response ) => {
    const params = request.params;

    return response.send('Fala Minha Senha com id = ');
});

routes.get('/pass', ( request , response ) => {
    const params = request.query;

    return response.send('Fala Minhas Senhas');
});

routes.post('/pass_add', ( request , response ) => {
    const body = request.body;

    return response.send('Add Minha Senha');
});

routes.delete('/pass_deleted', ( request , response ) => {
    return response.send('Deleta Minha Senha');
});



module.exports = routes;