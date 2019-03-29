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
    birthday:{
        type:String,
        default:''
    },
    sex:{
        type:String,
        default:'男'
    }
});
module.exports = userSchema;