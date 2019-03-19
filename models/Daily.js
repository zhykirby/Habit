const mongoose = require('mongoose');
const dailies = require('../schemas/dailies');
module.exports = mongoose.model('Daily',dailies);