const response = await fetch('http://localhost:3000/contato', {
  method: 'GET',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body: JSON.stringify({ username: 'maria', password: '123456' }),
});

// console.log(response);

const body = await response.text();

console.log(body);
