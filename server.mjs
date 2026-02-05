import { createServer } from 'node:http';

//cria servidores com Node.js
const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const body = Buffer.concat(chunks).toString('utf-8');

  if (req.method === 'GET' && url.pathname === '/') {
    res.statusCode = 200; //expoe
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const curso = 'Node.js';
    return res.end(`<html>
    <head>
      <title>Curso de ${curso}</title>
    </head>
    <body
      <h1>Curso de ${curso}</h1>
    </body>
  </html>`);
  } else if (req.method === 'POST' && url.pathname === '/produtos') {
    res.statusCode = 201; //cria
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ nome: 'Notebook' }));
  } else {
    res.statusCode = 404; //error
    res.end('Página não encontrada');
  }
});

//inicia o sevidor e fica aguardando requisições na porta passada.
server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});

///////////////////////////////////////////////////////////////

const frase1 = Promise.resolve('Olá ');
const frase2 = Promise.resolve('Mundo ');
const frasesPromises = [frase1, frase2];
const frases = [];
console.log(frasesPromises);

for await (const frase of frasesPromises) {
  frases.push(frase);
}
//Buffer é um bloco de bytes em memoria. Para transformar esses bytes, precisamos concatenar  o Buffer e decodificar/interpretar para o formato apropriado.

const part1 = Buffer.from('olá ');
const part2 = Buffer.from('mundo');
const final = Buffer.concat([part1, part2]);

/* Body
O corpo da requisição chega como um iterável assíncrono(os chunks).Para ler:

for await...of
Itera e acumula cada chunk.

  callback
Usa eventos: data para cada chunk e end ao final. */

// StatusCode;
// 200
// OK.

// 201
// Created.

// 301
// Moved Permanently.

// 400
// Bad Request.

// 404
// Not Found.

// 500
// Internal Server Error.
