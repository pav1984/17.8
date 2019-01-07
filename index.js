var fs = require('fs');
var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/welcome') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.write('<img src="https://http.cat/404" alt="404">');
        response.end();
    }
});

server.listen(8080);