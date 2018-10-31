 var mongoose = require('mongoose');

var QuizSchema = mongoose.Schema({
    title: String,
    questions: [{body: String, choices: [String]}],
    answers: [{body: String, choices: [String]}]
});

module.exports = mongoose.model('Quiz', QuizSchema);