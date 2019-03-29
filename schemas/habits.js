const mongoose = require('mongoose');
const Schema = mongoose.Schema
const habitSchema = new Schema({
    user:{
        type:String,
        default:''
    },
    title:{
        type:String,
        default:''
    },
    content:{
        type:String,
        default:''
    },
    date:{
        type:String,
        default:''
    },
    
});
module.exports = habitSchema;