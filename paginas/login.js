const template = require('./template');

module.exports = (req, res) => {
    const html = template(
        'Login', `
        <form action="/login" method="post"> 
            <div class="form">
                    <label for="email">Email: </label>
                    <input type="text" name="email" id="email">
            </div>    
            <div class="form">
                    <label for="password">Senha: </label>
                <input type="password" name="password" id="password">
            </div>
            <div>
                <button type="submit" class="button">Entrar</button>
            </div>
        </form>
    `);
    res.status(200).send(html)
}