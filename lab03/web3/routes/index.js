var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo1', (req, res) => {
  var letter = 'a';
  var string = 'Greenwich Vietnam';
  var integer = 2023;
  var double = 3.14;
  var array = [10, 20, 30, 40, 50];

  res.render('demo1', 
    { ky_tu : letter ,
      chuoi : string ,
      so_nguyen : integer,
      so_thuc : double,
      mang : array,
    });
});

router.get('/demo2', (req, res) => {
   var person = {
      "name" : "Minh",
      "age" : 30
   };

   var motorbike = {
      "brand" : "Honda",
      "model" : "SH",
      "color" : "White",
      "price" : "49999.99"
   };

   res.render('demo2', { person: person, motorbike: motorbike});
})

router.get('/demo3', (req, res) => {
  
})

module.exports = router;
