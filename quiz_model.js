var mongoose = require('mongoose');

var QuizSchema = mongoose.Schema({
    title: String,
    author: String,
    questions: [{id: Number, question: String, type: Number, choices: [String]}],
    answers: [{id: Number, answer: String, answers: [String]}]
});

module.exports = mongoose.model('Quiz', QuizSchema);