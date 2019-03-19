const express = require('express');
const routers = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

var responseData;

routers.use(function(req,res,next){
    responseData={
        code:0,
        message:'注册成功！',
        token:"",
        userName:''
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
    }).catch(function(error){
        console.log(error);
    });
});

routers.post('/user/login',function(req,res,next){
    let username = req.body.userName;
    let password = req.body.passWord;
    if(username == ''){
        responseData.code = 11;
        responseData.message = '用户名为空';
        res.json(responseData);
        return;
    }
    if(password == ''){
        responseData.code = 12;
        responseData.message = '密码为空';
        res.json(responseData);
        return;
    }
    User.findOne({
        username:username,
    }).then(function(userInfo){
        if(userInfo == null){
            responseData.code = 13;
            responseData.message = '用户名错误';
            res.json(responseData);
            return;
        }
        if(userInfo.password != password){
            responseData.code = 14;
            responseData.message = '密码错误';
            res.json(responseData);
            return;
        }
        else{
            const payload = {
                username:username,
                user:true
            };
            const secret = 'howie';
            const token = jwt.sign(payload,secret,{expiresIn:60*60*1});
            responseData.code = 10;
            responseData.message = '登录成功~';
            responseData.token = token;
            responseData.userName = userInfo.username;
            responseData.userInfo = {
                _id : userInfo._id,
                username : userInfo.username,
                email : userInfo.email,
                describtion : userInfo.describtion,
                name : userInfo.name,
                token:token
            };
            req.cookies.set('userInfo',JSON.stringify({
                _id:userInfo._id,
                username:userInfo.username,
                token:token
            }));
            res.json(responseData);
            return;
        }
    }).catch(function(error){
        console.log(error);
    });
});

routers.post('/user/userInfo',function(req,res,next){ 
    let name = req.body.name;
    let birthday = req.body.birthday;
    let email = req.body.email;
    let describtion = req.body.describtion;
    let username = req.body.username;
    User.findOne({
        username:username
    }).then(function(userInfo){;
        userInfo.name = name;
        userInfo.birthday = birthday;
        userInfo.email = email;
        userInfo.describtion = describtion;
        return userInfo.save();
    }).then(function(newInfo){
        responseData.code = 20;
        responseData.message = '保存成功';
        res.json(responseData);
    }).catch(function(err){
        console.log(err);
    });
});

module.exports = routers;

