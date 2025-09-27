// importa um modulo/pacote nativo do NodeJS
const http = require("node:http");

// defino o endereço do meu servidor
const hostname = "127.0.0.1";

// define a porta onde o servidor vai rodar
const port = 3000;

// cria um servidor
const server = http.createServer((req, res) => {
    // o corpo {} de uma função anônima é onde colocamos os códigos

    // define que a resposta será OK(sucesso)
    req.statusCode = 200;

    // define o tipo do conteúdo que será enviado
    res.setHeader("Content-Type", "text/plain");

    res.end("Hello World, Ola Mundo :P");
});

server.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`);
});