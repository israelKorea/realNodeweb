


const http = require('http');
const url = require('url');
const fs = require('fs');

var server = http.createServer((req, res) => {
  /*
    url.parse 로 요청한 주소 request.url을 분석
    path 변수에 url 할당
    GET(기본적인요청)요청일 때 url따라 HMTL파일을 읽어들임
  */
  const path = url.parse(req.url, true).pathname;

  if(req.method === 'GET'){
    if(path === '/about'){
      res.writeHead(200, {'Content-Type' : 'text/html'});
      /*
        __dirname : 현재경로
      */
      fs.readFile(__dirname + '/about.html',(err, data) => {
        if(err){
          return console.error(err);
        }
        res.end(data, 'utf-8');
      });
    }else if(path === '/'){
      res.writeHead(200, {'Content-Type' : 'text/html'});
      fs.readFile(__dirname + '/main.html', (err, data) => { // __dirname : root directory
        if(err){
          return console.error(err);
        }
        res.end(data, 'utf-8');
      });
    }else{
      res.statusCode = 404;
      res.end('no addr');
    }
  }
});

server.listen(3001);
