const express = require('express');
const path = require('path');
const app = express();
const DBconnect = require('./database.js'); // calling DB connection
const route = require('./route.js'); //route.js file

app.set('view engine', 'pug'); // 엔진을 pug로 설정
app.set('views', path.join(__dirname, 'html')); // pug파일들 폴더를 정함
app.use(express.static(path.join(__dirname, 'html')));
app.use('/', route);
app.use((req, res, next) => { // 404 error
  res.status(404).send('no addr');
});
app.use((err, req, res, next) => {
  console.error(err.stack); // show error msg
  res.status(500).send('server error'); // send msg to client about server error with 500 err
});

/* middleware example
  This middleware running when req to server
 */
app.use((req, res, next)=>{
  console.log('Hello world!! to be great programmer');
});
app.listen(3000, ()=>{
  console.log('Exress server run on 3000 port!');
});
