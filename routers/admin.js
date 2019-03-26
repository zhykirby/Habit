const express = require('express');
const jwt = require('jsonwebtoken');
const routers = express.Router();
const Content = require('../models/Content');
const User = require('../models/User');
const Daily = require('../models/Daily');
const mongoose = require('mongoose');

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
    res.render('admin/create',{
        userInfo:req.userInfo
    });
});
routers.get('/mobile-write',function(req,res,next){
    res.render('admin/mobile-write',{
        userInfo:req.userInfo
    });
});

routers.get('/test',function(req,res,next){
    res.render('admin/test',{
        userInfo:req.userInfo
    });
});

routers.get('/write',function(req,res,next){
    res.render('admin/write',{
        userInfo:req.userInfo
    });
})

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
    Daily.find({user:req.userInfo.username}).then(function(dailies){
        res.render('admin/diary',{
            userInfo:req.userInfo,
            dailies:dailies
        });
    });
});

routers.get('/daily-edit',function(req,res,next){
    let id = req.query.id||'';
    Daily.find({id:id}).then(function(dailies){
        res.render("admin/daily-edit",{
            userInfo:req.userInfo,
            dailies:dailies
        });
    });
});

routers.get('/status/success',function(req,res,next){
    res.render('admin/status/success');
})

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