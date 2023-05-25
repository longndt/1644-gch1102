//khai báo thư viện Express và Router
var express = require('express');
var router = express.Router();

//URL : localhost:3000/student/add
router.get('/add', (req, res) => {
   res.render('add');
});

router.post('/info', (req, res) => {
   res.render('info');
});

//export module
module.exports = router;