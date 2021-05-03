
const express = require('express');
const paginaInicial = require('./paginas/inicio');
const paginaRegistro = require('./paginas/cadastro');
const paginaValidaRegistro = require('./paginas/verificarRegistro');
const paginaLogin = require('./paginas/login');
const paginaValidaLogin = require('./paginas/verificarLogin.js');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', paginaInicial);
app.get('/registro', paginaRegistro);
app.post('/registro', paginaValidaRegistro);
app.get('/login', paginaLogin);
app.post('/login', paginaValidaLogin);

const port = 5000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
    console.log(`Acesse http://localhost:${port} para testar.`);
})