import { DatabaseSync } from 'node:sqlite';

// Cria/abre uma conexão síncrona com um banco de dados SQLite.
const db = new DatabaseSync('./db.sqlite');

// Executa comandos SQL no banco conectado.
// Execute configurações de PRAGMA logo após abrir a conexão usando exec.
db.exec(`
  PRAGMA foreign_keys = 1;
  PRAGMA journal_mode = WAL;
  PRAGMA synchronous = NORMAL;

  PRAGMA cache_size = 2000;
  PRAGMA busy_timeout = 5000;
  PRAGMA temp_store = MEMORY;
`);

db.exec(/*sql*/ `
  CREATE TABLE IF NOT EXISTS "produtos" (
    "slug" TEXT PRMARY KEY,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "preco" INTEGER NOT NULL
  )
`);

// ? - Placeholder que substitui valores que serão passados como argumentos. Esses valores serão parametrizados para garantir maior segurança na execução da query.
// Cria uma query com o SQL passado e retorna um objeto com métodos para sua execução.
const insert = db.prepare(`
  INSERT OR IGNORE INTO "produtos"
    ("slug", "nome", "categoria", "preco")
    VALUES  
    (?,?,?,?)
`);

// Retorna metadados da execução (ex: INSERT).
insert.run('notebook', 'Notebook', 'eletronicos', 4000);
insert.run('mouse', 'Mouse', 'eletronicos', 200);
insert.run('mesa', 'Mesa', 'moveis', 2000);
insert.run('smartphone', 'Smartphone', 'eletronicos', 4000);

// Retorna uma array com todos os resultados.
const produtos = db.prepare(`SELECT * FROM "produtos"`).all();

// Retorna uma array com todos os resultados.
const notebook = db.prepare(`SELECT * FROM "produtos" WHERE "slug" = ?`).get('notebook');
