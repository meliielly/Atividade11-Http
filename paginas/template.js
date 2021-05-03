module.exports = (titulo, conteudo) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class = "container">
        <div>
            <ul>
                <div>
                    <li>
                        <a href="/">Página Inicial</a>
                    </li>
                </div>
                <div>
                    <li>
                        <a href="/registro">Registrar-se</a>
                    </li>
                </div>
                <div>
                    <li>
                        <a href="/Login">Sing in</a>
                    </li>
                </div>
            </ul>
        </div>
    
        <div><h1>${titulo}</h1></div>
        <div><div>${conteudo}</div></div>
    </div>
</body>
</html>
`;