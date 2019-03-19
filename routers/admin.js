const express = require('express');
const jwt = require('jsonwebtoken');
const routers = express.Router();
const Content = require('../models/Content');
const User = require('../models/User');

routers.get('/',function(req,res,next){
    jwt.verify(req.userInfo.token,'howie',function(err,decode){
        if(err){
            console.log('error')
            res.render('main/index');
        }else{
            User.find().then(function(users){
                res.render('admin/content',{
                    userInfo:req.userInfo,
                    users:users
                });
            })
            
        }
    });      
});

routers.get('/create',function(req,res,next){
    res.render('admin/create');
});

routers.get('/test',function(req,res,next){
    res.render('admin/test');
});

routers.get('/userInfo',function(req,res,next){
    User.find().then(function(users){
        res.render('admin/userInfo',{
            userInfo:req.userInfo,
            users:users
        });
    }).catch(function(e){
        console.log(e);
    });
});

routers.get('/diary',function(req,res,next){
    User.find().then(function(users){
        res.render('admin/diary',{
            userInfo:req.userInfo,
            users:users
        });
    }).catch(function(e){
        console.log(e);
    });
});

routers.post('/content',function(req,res,next){
    content = new Content({
        name:req.body.name,
        idName:req.body.id,
        password:req.body.password,
        newPassword:req.body.newPassword,
        describe:req.body.textarea
    });
    content.save().then(function(){
        res.render('admin/status/success');
    });
});



module.exports = routers;