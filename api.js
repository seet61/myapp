/**
 * Created by seet on 21.01.17.
 * функции необходимые для управления моделью
 */

var mongoose = require('mongoose');
var crypto = require('crypto');
var config = require('config');
var db  = mongoose.connect("mongodb://" + config.get('User.dbConfig.host') + ":" + config.get('User.dbConfig.port') + "/coffeeplaces");
var User = require('./db/models/User.js');

//API
exports.creareUser = function (userData) {
    var user = {
        name : userData.name,
        email : userData.email,
        password: hash(userData.password)
    };
    return new User(user).save()
};

exports.getUser = function (id) {
    return User.findOne(id);
}

exports.checkUser = function (userData) {
    return User.findOne({email : userData.email}).then(function (doc) {
        if (doc.password == hash(userData.password)) {
            console.log("User: " + userData.name + " password ok.");
            return Promise.resolve(doc);
        }
        else {
            Promise.reject("Error wrong");
        }
    })
}

function hash(text) {
    return crypto.createHash('sha1').update(test).digest('base64');
}