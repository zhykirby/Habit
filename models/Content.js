const mongoose = require('mongoose');
const contents = require('../schemas/contents');
module.exports = mongoose.model('Content',contents);