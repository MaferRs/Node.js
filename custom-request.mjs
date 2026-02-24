export async function customRequest(req) {
  const url = new URL(req.url, 'http://localhost');
  req.query = url.searchParams;
  req.pathname = url.pathname;

  // é um fragmento de dados brutos sendo transmitido
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  // Junta todos os pedaços e transforma em uma string única
  const body = Buffer.concat(chunks).toString('utf-8');

  if (req.headers['content-type'] === 'application/json') {
    req.body = JSON.parse(body);
  } else {
    req.body = body;
  }

  return req;
}
