const express = require('express');
const routers = express.Router();
const Content = require('../models/Content');
const User = require('../models/User');

routers.get('/',function(req,res,next){
    res.render('admin/content',{
        userInfo:req.userInfo
    });
});

routers.get('/create',function(req,res,next){
    res.render('admin/create');
});

routers.get('/test',function(req,res,next){
    res.render('admin/test');
});

routers.get('/userInfo',function(req,res,next){
    console.log(req.userInfo);
    console.log(req.userInfo._id);
    res.render('admin/userInfo',{
        userInfo:req.userInfo
    })
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