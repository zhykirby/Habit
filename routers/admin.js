const express = require('express');
const jwt = require('jsonwebtoken');
const routers = express.Router();
const Content = require('../models/Content');
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
    jwt.verify(req.userInfo.token,'howie',function(err,decode){
        if(err){
            console.log('error')
            res.render('main/index');
        }else{
            User.findOne({username:req.userInfo.username}).then(function(users){
                res.render("admin/test",{
                    userInfo:req.userInfo,
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
    jwt.verify(req.userInfo.token,'howie',function(err,decode){
        if(err){
            console.log('error')
            res.render('main/index');
        }else{
            Daily.find({user:req.userInfo.username}).then(function(dailies){
                res.render('admin/diary',{
                    userInfo:req.userInfo,
                    dailies:dailies
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
routers.get('/mobile-edit',function(req,res,next){
    let id = req.query.id;
    Daily.findOne({_id:id}).then(function(dailies){
        res.render("admin/mobile-edit",{
            userInfo:req.userInfo,
            dailies:dailies
        });
    });
});

routers.get('/status/success',function(req,res,next){
    res.render('admin/status/success');
})





module.exports = routers;