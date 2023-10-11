var express = require('express');

var router = express.Router();
var createError = require('http-errors');
const laptops = require("../dao/laptops");
const team = require("../dao/laptopsTeam");

router.get('/team', function(req, res, next) {
  console.log('got into /team');

  const result = team.list();
  if (result) {
    res.setHeader('content-type', 'application/json');
    res.json((result));
  } else {
    next(createError(404));
  }
});

router.get('/all/:location',async function(req, res, next) {
  const param = req.params.location;
  console.log('got into laptops/:location ' + param);

  const result = await laptops.query_by_arg(
    param);
  if (result) {
    console.log()
    res.setHeader('content-type', 'application/json');
    res.json((result));
  } else {
    next(createError(404));
  }
});


module.exports = router;