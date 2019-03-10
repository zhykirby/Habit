var express = require('express');
var routers = express.Router();

routers.get('/',function(req,res,next){
    res.render('admin/content');
});

module.exports = routers;