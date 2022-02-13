const os = require('os');
const http = require('http');

const HOST = 'http://127.0.0.1';
const PORT = 3000;

const server = http.createServer(function (request, response) {
  if (request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    response.end();
    console.log('favicon requested');
    return;
  }

  response.writeHead(200, {"Content-Type": "application/json"});
  console.log('Node.js server have been hit!')
  response.end(JSON.stringify({
      message: request.socket.remoteAddress,
      net:os.networkInterfaces()
  }));
});

server.listen(PORT);

console.log(`Server running at ${HOST}:${PORT}/`);
