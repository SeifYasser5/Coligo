var Quiz = require('./quiz_model.js');

exports.create = (req, res) => {
    var Quiz = new Quiz({
        title: req.body.title,
        author: req.body.author,
        questions: req.body.questions,
        answers: req.body.questions,
    });
    Quiz.save().then(data => {res.send(data);}).catch(err => {res.send(err.message);});
};

exports.getAll = (req, res) => {
    Quiz.find().then(Quiz => {
        if(!Quiz) {
            return res.status(404).send({message: "No Quizzes"});
        }
        res.send(Quiz);})
        .catch(err => {return res.status(500).send({message: "Error retrieving quizzes"});});
};

exports.getOne = (req, res) => {
    var title = req.body.title;
    Quiz.findOne({title: title},{}).then(Quiz => {
        if(!Quiz) {
            return res.status(404).send({message: "No Quiz"});
        }
        res.send(Quiz);})
        .catch(err => {return res.status(500).send({message: "Error retrieving quiz"});});
};

exports.edit = (req, res) => {
    var title = req.body.title;
    Quiz.findOneAndUpdate({title: title},{ $set {questions: questions, answers: answers}}).then(Quiz => {
        if(!Quiz) {
            return res.status(404).send({message: "No Quiz"});
        }
        res.send(Quiz);})
        .catch(err => {return res.status(500).send({message: "Error updating quiz"});});
};