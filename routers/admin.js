let express = require('express');
let routers = express.Router();
let Content = require('../models/Content');
let User = require('../models/User');

routers.get('/',function(req,res,next){
    Content.find().then(function(contents){
        res.render('admin/content',{
            contents:contents
        })
    })
});

routers.get('/create',function(req,res,next){
    res.render('admin/create');
});

routers.post('/create',function(req,res,next){
    content = new Content({
        name:req.body.name,
        idName:req.body.id,
        password:req.body.password,
        newPassword:req.body.newPassword,
        describe:req.body.textarea
    });
    content.save().then(function(){
        res.render('admin/content',{
            message:'success'
        });
    })
});

module.exports = routers;