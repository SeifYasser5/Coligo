var Teacher = require('./teacher_model.js');

exports.create = (req, res) => {
    var T = new Teacher({username: req.body.username, password: req.body.password});
    T.save().then(data => {res.send(req.body.username);}).catch(err => {res.send(err.message);});
};

exports.getOne = (req, res) => {
    var username = req.body.username;
    //var password = req.body.password;
    Teacher.findOne({username: username}).then(Teacher => {
        if(!Teacher) {
            return res.status(404).send({message: req.body.username});
        }
        res.send(Teacher);})
        .catch(err => {return res.status(500).send({message: "Error retrieving profile"});});
};