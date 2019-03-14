const mongoose = require('mongoose');
const users = require('../schemas/users');
module.exports = mongoose.model('User',users);