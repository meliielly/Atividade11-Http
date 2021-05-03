const template = require('./template');

let array = [];
let status;
let html;

module.exports = (req, res) => {
    const params = req.body;
    const {user, email, password} = params;
    
    if(user != ''  && email != ''  && password != '' ){
        const usuarios = require('./users');
        usuarios.push(params);
        status = 200;
        html = template(
        'Cadastrado(a) com sucesso', `
        <p>Seu cadastro foi realizado como: ( ${email} )</p>
        `);
        console.log(array);
    }else{
        status = 401;
        html = template('Algum dado informado é inválido',`<p>Realize o login novamente</p>`);
    }
    res.status(status).send(html);
}