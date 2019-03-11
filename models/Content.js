let mongoose = require('mongoose');
let contents = require('../schemas/contents');
module.exports = mongoose.model('Content',contents);