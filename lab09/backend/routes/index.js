var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.get('/', async (req, res) => {
  var students = await StudentModel.find({});
 // res.render('index', { student: student});
  res.send(students);
})

module.exports = router;