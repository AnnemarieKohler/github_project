var http = require('http');
var fs = require('fs');
var PORT=8080;

function serveContent(){

}

function handleRequest(request, response){
  fs.readFile('index.html', 'utf8', function(err, readBytes) {
    response.end(readBytes);
  });
}


var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
