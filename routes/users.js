var express = require('express');
var router = express.Router();
var api = require('../api');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* Создание пользователя */
router.post('/login', function (req, res, next) {
    if(req.session.user) {
        return req.redirect('/');
    }

    api.checkUser(req.body).then(function (user) {
        if (user) {
            req.session.user = {id : user._id, name : user.name};
            res.redirect('/');
        }
        else {
            next(error);
        }
    }).catch(function (error) {
        return next(error);
    })
});

router.post('/', function (req, res, next) {
    api.creareUser(req.body).then(function (result) {
        console.log('User created');
    }).catch(function (err) {
        if (err.toJSON().code == 11000) {
          res.status(500).send("This email already exist");
        }
    })
});

router.post('/logout', function (req, res, next) {
    if (req.session.user) {
      delete req.session.user;
      res.redirect('/');
    }
});

module.exports = router;
