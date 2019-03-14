const express = require('express');
const routers = express.Router();
const Content = require('../models/Content');
const User = require('../models/User');

routers.get('/',function(req,res,next){
    Content.find().then(function(contents){
        res.render('admin/content',{
            contents:contents
        });
    });
});

routers.get('/create',function(req,res,next){
    res.render('admin/create');
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