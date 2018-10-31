var Teacher = require('./teacher_model.js');

exports.create = (req, res) => {
    var T = new Teacher({username: req.body.username, password: req.body.password});
    T.save().then(data => {res.send(data);}).catch(err => {res.send(err.message);});
};

exports.getOne = (req, res) => {
    var username = req.query.username;
    var password = req.query.password;
    Teacher.findOne({username: username, password: password}).then(Teacher => {
        if(!Teacher) {
            return res.status(404).send({message: "Wrong Credentials"});
        }
        res.send(Teacher._id);})
        .catch(err => {return res.status(500).send({message: "Error retrieving profile"});});
};