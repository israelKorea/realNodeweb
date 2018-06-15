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
  mongoose.connection.on('disconnected', connect);
  require('./user.js');
};
