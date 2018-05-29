const http = require('http');
const url = require('url');
const fs = require('fs');

var server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;

  if(req.method) === 'GET'){
    if(path === '/about'){
      res.writeHead(200, {'Content-Type', 'text/html'});
      fs.readFile(__dirname + '/about.html',(err, data) => {
        if(err){
          return console.error(err);
        }
        res.end(data, 'utf-8');
      });
    }else if(path === '/'){
      res.writeHead(200, 'Content-Type', 'text/html');
      fs.readFile(__dirname + '/main.html', (err, data) => {
        if(err){
          return console.error(err);
        }
        res.end(data, 'utf-8');
      });
    }else{
      res.statusCode = 404;
      res.end('no addr');
    }
  });

server.listen(3001);
