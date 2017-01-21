var express = require('express');
var router = express.Router();
var config = require('config');

/* GET home page. */
router.get('/', function(req, res, next) {
  //Что передаем в шалон
  var view = {
    "title": 'Express',
    "dbConnect": config.get('User.dbConfig.host')
  };
  //Возврат шаблона
  res.render('layout.html', view);
});




module.exports = router;
