import { createServer } from 'node:http';
import { Router } from './router.mjs';

const router = new Router();

router.get('/', (req, res) => {
  res.end('Home');
});

router.get('/contato', (req, res) => {
  res.end('Contato');
});

router.get('/produto/notebook', (req, res) => {
  res.end('Produtos - Notebook');
});

function postProduto(req, res) {
  res.end('Notebook Post');
}

router.post('/produto', postProduto);

console.log(router.routes);

//cria servidores com Node.js
const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');

  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // é um fragmento de dados brutos sendo transmitido
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  // Junta todos os pedaços e transforma em uma string única
  const body = Buffer.concat(chunks).toString('utf-8');
  const handler = router.find(req.method, url.pathname);

  if (handler) {
    handler(req, res);
  } else {
    res.statusCode = 404;
    res.end('Não encontrado');
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
