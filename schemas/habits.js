const mongoose = require('mongoose');
const Schema = mongoose.Schema
const habitSchema = new Schema({
    user:{
        type:String,
        default:''
    },
    name:String,
    startdate:{
        type:String,
        default:''
    },
    color:String,
    describe:String,
});
module.exports = habitSchema;