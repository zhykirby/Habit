const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swig = require('swig');
const Cookies = require('cookies');

app = express();

app.engine('html',swig.renderFile);//定义当前应用户所使用的引擎模板，第一个是模板引擎名称，第二个是解析处理模板内容的方法
app.set('views', path.join(__dirname, 'views'));//配置页面文件的根目录,设置为绝对路径
app.set('view engine','html')//注册模板引擎
swig.setDefaults({cache:false})//取消模板缓存
app.use(bodyParser.urlencoded({extended:true}))//用来解析request中body的urlencoded字符，只支持utf-8的编码的字符，也支持自动的解析gzip和zlib。返回的对象是一个键值对，当extended为false的时候，键值对中的值就位‘String’或‘Array’形式，为true的时候，则可以为任何数据类型。
//用来处理post请求
//设置Cookies中间件         
app.use(function(req,res,next){
    req.cookies = new Cookies(req,res);
    req.userInfo = {};
    if(req.cookies.get('userInfo')){
        try{
            req.userInfo=JSON.parse(req.cookies.get('userInfo'));

            next();
        }catch(e) {
            next();
        }
    }
    else{
        next();
    }    
})
app.use(function(req,res,next){
    req.daily = {};
    if(req.cookies.get('daily')){
        try{
            req.daily = JSON.parse(req.cookies.get('daily'));
            next();
        }
        catch(e){
            next();
        }
    }
    else{
        next();
    }
});
//路由中间件
app.use('/',require('./routers/main.js'));
app.use('/admin',require('./routers/admin.js'));
app.use('/api',require('./routers/api.js'));
//静态文件托管
app.use('/public',express.static(__dirname + '/public'));

const url = 'mongodb://localhost:27017/baseCode';
mongoose.Promise = global.Promise;
mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err!=null){
        console.log('connect error');
    }
    else{
        console.log('连接成功');
        const server = app.listen(8888,function(){
            console.log('服务器开启');
        });
    }
});

