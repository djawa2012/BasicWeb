var http = require("http");

function onRequest(request, response) {
    console.log("request in ...", request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("responding ...");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Node.js server is running ...");