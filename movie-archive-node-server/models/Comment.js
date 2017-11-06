var mongoose = require('mongoose');


var commentSchema = mongoose.Schema({
    _user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    text:String,
    date:Date,
    movie_id:String
});

var Comment = mongoose.model('comment',commentSchema);

module.exports = Comment;