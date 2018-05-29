const http = require('http');

var server = http.createServer((req, res) => {
  return req
    .on('err', (err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    })
    .on('data', (data) => {
      console.log(data);
    })
    .on('end', () => {
      res.on('error', (err) => {
        console.error(err);
      });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('Hello World!\n');
      res.end();
    })
});

server.listen(3001);
