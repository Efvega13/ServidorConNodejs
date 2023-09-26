const http = require('http');
const chalk = require('chalk');
const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const responseData = {
      nombre: 'Elio Vega',
      mensaje: 'Van muy rapido'
    };
    res.end(JSON.stringify(responseData));
  });
  
  server.listen(port, host, () => {
    console.log(chalk.green(`Servidor en ejecución en http://${host}:${port}`));
  });