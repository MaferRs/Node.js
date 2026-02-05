import { createServer } from "node:http";

//cria servidores com Node.js
const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  const url = new URL(req.url, 'http://localhost')
  const cor = url.searchParams.get('cor')
  const tamanho = url.searchParams.get('tamanho') // busca os paramentos passados na rota
  console.log(url)
  console.log(req.headers)
  console.log(req.headers['content-type'])

  if (req.method === 'GET' && url.pathname === '/') {
    res.statusCode = 200 //expoe
    res.end('Home')
  } else if (req.method === 'POST' && url.pathname === '/produtos') {
    res.statusCode = 201   //cria
    res.end(`Produtos: ${cor}, ${tamanho}`) // parametros atribuidos a rota
  } else {
    res.statusCode = 404 //error
    res.end('Página não encontrada')
  }

  console.log(req.method)

})


//inicia o sevidor e fica aguardando requisições na porta passada.
server.listen(3000, () => {
  console.log('Server: http://localhost:3000')
})


///////////////////////////////////////////////////////////////

const frase1 = Promise.resolve('Olá ')
const frase2 = Promise.resolve('Mundo ')
const frasesPromises = [frase1, frase2]
const frases = []
console.log(frasesPromises)

for await (const frase of frasesPromises) {
  frases.push(frase)
}

console.log(frases.join(''))


//Buffer é um bloco de bytes em memoria. Para transformar esses bytes, precisamos concatenar  o Buffer e decodificar/interpretar para o formato apropriado.

const part1 = Buffer.from('olá')
const part2 = Buffer.from('mundo')

const final = Buffer.concat([part1, part2])

console.log(final.toString('utf-8'))


/* Body
O corpo da requisição chega como um iterável assíncrono(os chunks).Para ler:

for await...of
Itera e acumula cada chunk.

  callback
Usa eventos: data para cada chunk e end ao final. */


