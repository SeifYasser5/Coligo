var express = require('express');
var router = express.Router();
var quiz = require('./quiz_controller.js');
var teacher = require('./teacher_controller.js');
var student = require('./student_controller.js');

router.post('/createQuiz', quiz.create);
router.get('/getAllQuiz', quiz.getAll);
router.get('/getOneQuiz/', quiz.getOne);
router.put('/editQuiz', quiz.edit);
router.post('/createTeacher', teacher.create);
router.post('/createStudent', student.create);
router.get('/getOneTeacher', teacher.getOne);
router.get('/getOneStudent', student.getOne);

module.exports = router;