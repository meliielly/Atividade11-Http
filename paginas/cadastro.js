const template = require('./template');

module.exports = (req, res) => {
    const html = template(
        'Registre-se', `
        <form action="/registro" method="post">
            <div class="form">
                <label for="user">Nome :</label>
                <input type="text" name="user" id="user" placeholder="informe seu nome">
            </div>  
            <div class="form">
                <label for="email">Email :</label>
                <input type="text" name="email" id="email" placeholder="exemplo@gmail.com">
            </div>    
            <div class="form">
                <label for="password">Senha :</label>
                <input type="password" name="password" id="password" placeholder="informe a senha">
            </div>
            <div>
                <button type="submit" class="button">Registrar</button>
            </div>
        </form>
    `);
    res.status(200).send(html)
}