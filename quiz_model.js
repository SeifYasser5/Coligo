var mongoose = require('mongoose');

var QuizSchema = mongoose.Schema({
    title: String,
    author: String,
    questions: [{id: int, question: String, type: int, choices: [String]}],
    answers: [{id: int, answer: String, answers: [String]}]
});

module.exports = mongoose.model('Quiz', QuizSchema);