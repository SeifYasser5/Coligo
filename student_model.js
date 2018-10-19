var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('Student', StudentSchema);