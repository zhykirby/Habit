var express = require('express');
var routers = express.Router();

routers.get('/',function(req,res,next){
    res.render('main/index');
});

module.exports = routers;