const express = require("express");
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes);


/**
 * #Entidades:
 *  -- User
 *  -- Accounts
 * #Funcionalidades:
 *  -- Login
 *  -- Cadastro
 *  -- LogOut
 *  -- Add Accounts
 *  -- Deletar Accounts
 *  -- Alterar Accounts
 *  -- Listar Accounts (totais e específicos)
 *  
 */

app.listen(3333);