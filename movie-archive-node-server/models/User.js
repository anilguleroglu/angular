var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
    token:String,
    email:String,
    password:String
});

var User = mongoose.model('user',userSchema);

module.exports = User;