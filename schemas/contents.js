const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contentSchema = new Schema({
    name:String,
    idName:String,
    password:String,
    newPassword:String,
    describe:String
})

module.exports = contentSchema