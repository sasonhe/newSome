var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    title: '首页'
  })
});
router.get('/abuot', function(req, res) {
  res.render('abuot', {
    title: '公司介绍'
  })
});
module.exports = router;