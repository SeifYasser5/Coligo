var mongoose = require('mongoose');

var TeacherSchema = mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('Teacher', TeacherSchema);