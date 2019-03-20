const mongoose = require('mongoose');
const Schema = mongoose.Schema
const dailySchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users '
    },
    title:{
        type:String,
        default:''
    },
    content:{
        type:String,
        default:''
    }
});
module.exports = dailySchema;