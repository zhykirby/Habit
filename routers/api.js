const express = require('express');
const routers = express.Router();
const User = require('../models/User');

var responseData;

routers.use(function(req,res,next){
    responseData={
        code:0,
        message:'注册成功！'
    };
    next();
})

routers.post('/user/register',function(req,res,next){
    let username = req.body.username;
    let password = req.body.password;
    let confirm = req.body.confirm;
    if(username === ''){
        responseData.code = 1;
        responseData.message = '用户名不能为空';
        res.json(responseData);
        return;
    }
    if(password === ''){
        responseData.code = 2;
        responseData.message = '密码不能为空';
        res.json(responseData);
        return;
    }
    if(confirm === ''){
        responseData.code = 3;
        responseData.message = '请输入确认密码';
        res.json(responseData);
        return;
    }
    if(password !== confirm){
        responseData.code = 4;
        responseData.message = '两次输入密码不一致';
        res.json(responseData);
        return;
    }
    User.findOne({
        username:username
    }).then(function(userInfo){
        if(userInfo != null){
            responseData.code = 5;
            responseData.message = '用户名已存在';
            res.json(responseData);
        }else{
            let user = new User({
                username:username,
                password:password
            });
            return user.save();
        }
    }).then(function(newUser){
        responseData.code = 0;
        responseData.message = '注册成功！';
        res.json(responseData);
    });
});

routers.post('/user/login',function(req,res,next){
    let userName = req.body.userName;
    let passWord = req.body.passWord;
    if(userName == ''){
        responseData.code = 11;
        responseData.message = '用户名为空';
        res.json(responseData);
        return;
    }
    if(passWord == ''){
        responseData.code = 12;
        responseData.message = '密码为空';
        res.json(responseData);
        return;
    }
    User.findOne({
        username:userName
    }).then(function(userInfo){
        if(userInfo == null){
            responseData.code = 13;
            responseData.message = '用户不存在';
            res.json(responseData);
            return;
        }
        if(userInfo.password != passWord){
            responseData.code = 14;
            responseData.message = '密码不正确';
            res.json(responseData);
            return;
        }
        else{
            responseData.code = 10;
            responseData.message = '登录成功~';
            res.json(responseData);
            return;
        }
    });
});

module.exports = routers;