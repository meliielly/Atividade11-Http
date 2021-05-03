const template = require('./template');

let status;
let html;

module.exports = (req, res) => {
    const params = req.body;
    const {email, password} = params;
   
    if(email != ''  && password != '' ){
        status = 200;
        const usuarios = require('./users');
        console.log(usuarios);
        let verificado = 0;
        for (const usuario of usuarios) {
            if(usuario.email === email && usuario.password === password){
                verificado = 1;
            }
        }
        if(verificado != 1){
            status = 401;
            html = template('Login ou senha não encontrado',`<p>Tente novamente</p>`); 
        }else{
            html = template(
                'Login realizado com sucesso', `
                <p>Seja Bem-vindo(a) ${email}</p>
            `); 
        }
    }else{
        status = 401;
        html = template('Login ou senha inválidos',`<p>Tente novamente</p>`);
    }
    res.status(status).send(html);
}