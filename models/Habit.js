const mongoose = require('mongoose');
const habits = require('../schemas/habits');
module.exports = mongoose.model('Habit',habits);