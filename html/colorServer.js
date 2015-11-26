var http = require("http");
var fs = require("fs");

function pageNotFoundResponse (request, response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Page not found");
    response.end();
}

function onRequest (request, response) {
    console.log("Incomming request", request.url);

    if ( request.method === "GET" && request.url === "/" ) {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    } else {
        pageNotFoundResponse(request, response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Color server is running now ...");