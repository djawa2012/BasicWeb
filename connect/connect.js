var connect = require("connect");
var http = require("http");

var app = connect();

function handleRequest (request, response, next ) {
    console.log("handleRequest", request.url);
    response.write("received request");
    //response.end();
    next();
}

function handleRequestNext (request, response, next) {
    console.log("handleRequestNext", request.url);
    response.write(" then handle Request next");
    response.end();
}

function handleIdRequest (request, response) {
    console.log("handleIdRequest", request.url );
    response.write("got request for handleIdRequest " + request.url );
    response.end();
}

function handleNameRequest (request, response) {
    console.log("handleNameRequest", request.url);
    response.write("got request for handleNameRequest " + request.url );
    response.end();
}

app.use("/id", handleIdRequest);
app.use("/name", handleNameRequest);
app.use(handleRequest);
app.use(handleRequestNext);

http.createServer(app).listen(8888);
console.log("Server is running ...");