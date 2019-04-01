const express = require('express');
const jwt = require('jsonwebtoken');
const routers = express.Router();
const Habit = require('../models/Habit');
const User = require('../models/User');
const Daily = require('../models/Daily');

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
            });
            
        }
    });      
});
routers.get("/mobile-user",function(req,res,next){
    User.find().then(function(users){
        res.render('admin/mobile-user',{
            userInfo:req.userInfo,
            users:users
        });
    });
})

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
    var habits;
    jwt.verify(req.userInfo.token,'howie',function(err,decode){
        if(err){
            console.log('error')
            res.render('main/index');
        }else{
            Habit.find({user:req.userInfo.username}).then(function(habit){
                habits = habit;
                return User.findOne({
                    username:req.userInfo.username
                });
            }).then(function(users){
                res.render("admin/test",{
                    userInfo:req.userInfo,
                    habits:habits,
                    users:users
                });
            });
        }
    }); 
});
routers.get("/mobile-about",function(req,res,next){
    res.render("admin/mobile-about");
});
routers.get("/about",function(req,res,next){
    res.render("admin/about");
});
routers.get('/write',function(req,res,next){
    res.render('admin/write',{
        userInfo:req.userInfo
    });
});

routers.get('/mobile-pwd',function(req,res,next){
    res.render('admin/mobile-pwd',{
        userInfo:req.userInfo
    });
});
routers.get('/pwd',function(req,res,next){
    res.render('admin/pwd',{
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
    var dailies;
    jwt.verify(req.userInfo.token,'howie',function(err,decode){
        if(err){
            console.log('error')
            res.render('main/index');
        }else{
            Daily.find({user:req.userInfo.username}).then(function(dailie){
                dailies = dailie;
                return User.findOne({
                    username:req.userInfo.username
                });
            }).then(function(users){
                res.render("admin/diary",{
                    userInfo:req.userInfo,
                    dailies:dailies,
                    users:users
                });
            });    
        }
    }); 
});

routers.get('/daily-edit',function(req,res,next){
    let id = req.query.id;
    Daily.findOne({_id:id}).then(function(dailies){
        res.render("admin/daily-edit",{
            userInfo:req.userInfo,
            dailies:dailies
        });
    });
});
routers.get('/read-more',function(req,res,next){
    let id = req.query.id;
    Daily.findOne({_id:id}).then(function(dailies){
        res.render("admin/read-more",{
            userInfo:req.userInfo,
            dailies:dailies
        });
    });
});
routers.get('/mobile-read',function(req,res,next){
    let id = req.query.id;
    Daily.findOne({_id:id}).then(function(dailies){
        res.render("admin/mobile-read",{
            userInfo:req.userInfo,
            dailies:dailies
        });
    });
});
routers.get('/mobile-edit',function(req,res,next){
    let id = req.query.id;
    Daily.findOne({_id:id}).then(function(dailies){
        res.render("admin/mobile-edit",{
            userInfo:req.userInfo,
            dailies:dailies
        });
    });
});
routers.get('/diary/delete',function(req,res,next){
    let id = req.query.id;
    Daily.remove({
        _id:id
    }).then(function(){
        res.render("admin/status/success")
    })
})
routers.get("/habit-write",function(req,res,next){
    res.render("admin/habit-write",{
        userInfo:req.userInfo
    });
});
routers.get("/mobile-habit",function(req,res,next){
    res.render("admin/mobile-habit",{
        userInfo:req.userInfo
    });
});
routers.get('/status/success',function(req,res,next){
    res.render('admin/status/success');
});





module.exports = routers;