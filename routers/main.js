const express = require('express');
const routers = express.Router();

routers.get('/',function(req,res,next){
    res.render('main/index',{
        userInfo:req.userInfo
    });
});

routers.get('/login',function(req,res,next){
    res.render('main/login');
});

module.exports = routers;