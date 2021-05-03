const template = require('./template');


module.exports = (req, res) => {
    const html = template(
        'Página Inicial', `
        <p>Seja Bem-vindo(a) ao nosso site,</p>
        <p>Realize seu cadastro preenchendo o nosso formuário de registro!!!</p>
    `);
    res.status(200).send(html)
}