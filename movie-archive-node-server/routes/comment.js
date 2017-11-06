var express = require('express');
var router = express.Router();
var moment = require('moment');
var User = require('../models/User');
var Comment = require('../models/Comment');

router.get('/list/:id',(req,res,next)=>{
    getUser(req,(err,user)=>{
        if(user==null){
            res.json({success:false,msg:'Error'});
        }
        else{
            Comment.find({movie_id:req.params['id']}).populate('_user').catch((err)=>{
                
                    res.json({success:false,msg:'Error',data:err});
                
            }).then((comments)=>{
                
                    res.json({success:true,data:comments});
                
            })
        }
    })
    

});

router.post('/delete',(req,res,next)=>{
    getUser(req,(err,user)=>{
        if(user==null){
            res.json({success:false,msg:'Error'});
        }
        else{
            var commentId=req.body.id;
            Comment.findOne({_id:commentId,_user:user._id},(err,comment)=>{
                if(comment==null){
                    res.json({success:false,msg:'comment not found'});
                }
                else{
                    Comment.remove({_id:commentId,_user:user._id},()=>{
                        res.json({success:true});
                    })
                    // comment.remove(()=>{
                        
                    // })
                }
            })
        }
    })
})

router.post('/new',(req,res,next)=>{
    getUser(req,(err,user)=>{
        if(err){
            res.json({success:false,msg:err.err});
        }
        else{
            var userId = user._id;
            var text = req.body.text;
            var movieId=req.body.movieId;
            var date = moment();

            var c = new Comment({
                _user:userId,
                text:text,
                date:date,
                movie_id:movieId
            });
            c.save(()=>{
                res.json({success:true});
            })
        }
    })
});

function getUser(req,callback){
    var token = req.headers["ag-ma-token"];
    console.log(token);
    if(token==null){
        callback({err:'Token not found'},null);
    }
    User.findOne({token:token},(err,user)=>{
        if(err){
            callback(err,null);
        }
        else{
            if(user==null){
                callback({err:'token invalid'},null);
            }
            else{
                callback(null,user);
            }
        }
    })
}

module.exports = router;