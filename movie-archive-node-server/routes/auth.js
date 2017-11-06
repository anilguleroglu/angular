var express = require('express');
var router = express.Router();
var Cryptr = require('cryptr');
const cryptr = new Cryptr('my-secret-token');
var randExp = require('randexp');

var User = require('../models/User');

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  
    var email = req.body.email;
    var password = req.body.password;
    var encryptPwd = cryptr.encrypt(password);

    User.findOne({email:email},(err,user)=>{
        if(err){
            res.json({success:false,msg:'Error',data:err});
        }
        else{
            if(user){
                res.json({success:false,msg:'Email address already used'});
            }
            else{
                var token = new randExp('[A-Za-z0-9]{24}').gen();
                var u = new User({
                    email:email,
                    password:encryptPwd,
                    token:token
                });

                console.log(u);

                u.save(()=>{
                    res.json({success:true,data:u});
                });

                
            }
        }
    })

    
});

router.post('/login',(req,res,next)=>{

    var email = req.body.email;
    var password = req.body.password;
    var encryptPwd = cryptr.encrypt(password);

    User.findOne({email:email,password:encryptPwd},(err,user)=>{
        if(err){
            res.json({success:false,msg:'Error',data:err});
        }
        else{
            if(user==null){
                res.json({success:false,msg:'Email or password not found'});
            }
            else{
                res.json({success:true,data:user});
            }
        }
    })
})

module.exports = router;
