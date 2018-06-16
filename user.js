const mongoose = require('mongoose');
// create collection
const userSchema = new mongoose.Schema({ // Schema : table structure
  name : String
  , data : Object
});
module.export = mongoose.model('User', userSchema);
