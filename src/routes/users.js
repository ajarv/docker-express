var express = require('express');
var random_name = require('node-random-name');
var router = express.Router();


router.get('/', function (req, res) {
  let usernames = []
  let count = parseInt(req.query.count) || 10; 
  for (var ix=0; ix< count;ix++){
    usernames.push(random_name());
  }
  res.json({ users: usernames });
});

module.exports = router;
