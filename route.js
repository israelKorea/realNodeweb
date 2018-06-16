const express = require('express');
const path = require('path');
const User = require('./user.js');
const router = express.Router(); // seperator Router

router.get('/', (req, res)=>{ // connect to router instead of app.
  //res.sendFile(path.join(__dirname, 'html', 'main.html'));
  res.render('main'); // res.sendfile대신 res.render로 pug파일을 전송
});
router.get('/about', (req, res)=>{
  //res.sendFile(path.join(__dirname, 'html', 'about.html'));
  res.render('about');
});
// /:user 추가함으로써, /Zero 요청시, user collection에서 Zero 사용자를 찾아 전송함
router.get('/:name', (req, res)=>{
  User.find({ name : req.params.name }, (err, user)=>{
    res.render('main', { user : user });
  });
});
module.exports = router; // export router
