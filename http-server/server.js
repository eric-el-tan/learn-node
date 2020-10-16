var http = require('http');

function onRequest(request, response) {
    console.log('request: ', request);
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World');
    response.end();
    console.log('response: ', response);
}
http.createServer(onRequest).listen(7000);