var http = require('http');
var data = require('./data.json');
var fs = require('fs');

var serve = function(request, response) {
  if(request.method === 'GET') {
    var parameters = request.url; // \?valueof=b
    var query = parameters.substring(parameters.indexOf("=") + 1);

    var responseString = data[query];

    if(responseString == null || responseString == undefined){
      responseString = "Not found!"
    }

    response.write(responseString);
  } else if (request.method === 'POST') {
    var body = '';
    request.on('data', function(requestData) {
      body = body + requestData;
    });
    request.on('end', function(){
      save(JSON.parse(body), data);
    })
  }

  response.end();
}

var save = function(obj, data){
  for(var key in obj) {
    var objectKey = key;
    var objectValue = obj[key];

    data[objectKey] = objectValue;
  }
  
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
}

var httpServer = http.createServer(serve);
httpServer.listen(3000);