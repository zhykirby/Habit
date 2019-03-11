let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let contentSchema = new Schema({
    name:String,
    idName:String,
    password:String,
    newPassword:String,
    describe:String
})

module.exports = contentSchema