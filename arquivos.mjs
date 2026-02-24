import fs from 'node:fs/promises';
import fsCallback from 'node:fs';

fsCallback.readFile('./produtos/notebook.json', 'utf-8', (error, arquivo) => {
  console.log(arquivo);
});

const dados2 = fsCallback.readFileSync('./produtos/notebook.json', 'utf-8');

console.log(dados2);

// Cria um diretório.
try {
  await fs.mkdir('./produtos');
} catch {
  console.log('Pasta já existe');
}

// Escreve um arquivo.
fs.writeFile('./produtos/notebook.json', JSON.stringify({ nome: 'Notebook' }));

// Lê um arquivo
const dados = await fs.readFile('./produtos/notebook.json', 'utf-8');
console.log(dados);

// Lê um diretório.
const dir = await fs.readdir('./produtos', { recursive: true });
console.log(dir.filter((file) => file.endsWith('json')));

console.log(dir);
