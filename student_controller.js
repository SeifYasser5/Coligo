var Student = require('./student_model.js');

exports.create = (req, res) => {
    var S = new Student({username: req.body.username, password: req.body.password});
    S.save().then(data => {res.send(data);}).catch(err => {res.send(err.message);});
};

exports.getOne = (req, res) => {
	var username = req.query.username;
    var password = req.query.password;
    Student.findOne({username: username, password: password},{}).then(Student => {
        if(!Student) {
            return res.status(404).send({message: "Wrong Credentials"});
        }
        res.send(Student._id);})
        .catch(err => {return res.status(500).send({message: "Error retrieving profile"});});
};