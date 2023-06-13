var express = require('express');
const MovieModel = require('../models/MovieModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var movies = await MovieModel.find({});
   res.render('movie/index', { movies : movies });
});


module.exports = router;