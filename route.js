const express = require('express');
const path = require('path');
const router = express.Router(); // seperator Router

router.get('/', (req, res)=>{ // connect to router instead of app.
  //res.sendFile(path.join(__dirname, 'html', 'main.html'));
  res.render('main'); // res.sendfile대신 res.render로 pug파일을 전송
});
router.get('/about', (req, res)=>{
  //res.sendFile(path.join(__dirname, 'html', 'about.html'));
  res.render('about');
});
module.exports = router; // export router
