var Teacher = require('./teacher_model.js');

exports.create = (req, res) => {
    var Teacher = new Teacher({
        username: req.body.username,
        password: req.body.password
        });
    Teacher.save().then(data => {res.send(data);}).catch(err => {res.send(err.message);});
};

exports.getOne = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    Teacher.findOne({username: username, password: password}).then(Teacher => {
        if(!Teacher) {
            return res.status(404).send({message: req.body.username});
        }
        res.send(Teacher);})
        .catch(err => {return res.status(500).send({message: "Error retrieving profile"});});
};