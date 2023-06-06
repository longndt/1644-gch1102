var express = require('express');
const MobileModel = require('../models/MobileModel');
var router = express.Router();

router.get('/', async (req, res) => {
  var mobiles = await MobileModel.find({});
  //console.log(mobiles);
  res.send(mobiles);
})

module.exports = router;