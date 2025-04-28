const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js App with SSH and Cron!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
