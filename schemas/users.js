const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({
    username:String,
    password:String,
    email:{
        type:String,
        default:''
    },
    describtion:{
        type:String,
        default:''
    },
    name:{
        type:String,
        default:'新用户'
    },
    isUser:{
        type:Boolean,
        default:true
    },
    birthday:{
        type:String,
        default:''
    }
});
module.exports = userSchema;