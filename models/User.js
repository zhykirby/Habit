let mongoose = require('mongoose');
let users = require('../schemas/users');
module.exports = mongoose.model('User',users);