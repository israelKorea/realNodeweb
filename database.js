const mongoose = require('mongoose');

module.exports = () =>{
  function connect(){
    // localhost:27017 mongoDB addr
    mongoose.connect('localhost:27017', function(err){
      if(err){
        console.error('mongoDB connection err', err);
      }
      console.log('mongoDB connected');
    });
  }
  connect();
  //mongoose.connect : mongoDB 커넥션 되고, connect함수 선언 후 바로 호출되므로, export( require'mongoose')한 함수가 호출되면 DB에 바로 연결됨
  mongoose.connection.on('disconnected', connect); // 'disconnected', connect는 연결이 해제될 경우 다시 커넥션을 맺음
  require('./user.js');
};
