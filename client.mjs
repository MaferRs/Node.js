const produtosResponse = await fetch('http://localhost:3000/produto');
const produtos = await produtosResponse.json();
console.log(produtos);

// const notebookResponse = await fetch(
//   'http://localhost:3000/produtos?categoria=eletronicos&slug=notebook'
// );
// const notebook = await notebookResponse.json();
// console.log(notebook.preco);

const response = await fetch('http://localhost:3000/produtos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: 'Notebook',
    slug: 'notebook',
    categoria: 'eletronicos',
    preco: 5000,
  }),
});

console.log(response);

const body = await response.text();

console.log(body);

await fetch('http://localhost:3000/produtos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: 'Mesa',
    slug: 'mesa',
    categoria: 'moveis',
    preco: 2000,
  }),
});

await fetch('http://localhost:3000/produtos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: 'Mouse',
    slug: 'mouse',
    categoria: 'eletronicos',
    preco: 500,
  }),
});
