var connect = require("connect");
var http = require("http");

var app = connect();

function handleRequest (request, response, next ) {
    console.log("handleRequest", request.url);
    response.end();
}

app.use(handleRequest);

http.createServer(app).listen(8888);
console.log("Server is running ...");