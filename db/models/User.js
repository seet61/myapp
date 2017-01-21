/**
 * Created by seet on 19.01.17.
 * Описание модели пользователя
 */

var mongoose = require('mongoose');
var User = new mongoose.schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

var UserModel = new mongoose.model('User', User);
model.exports = new mongoose.model('User', UserModel);

