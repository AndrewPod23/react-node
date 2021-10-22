const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const {
  LOGIN_MIN,
  LOGIN_MAX,
  PASSWORD_MIN,
  PASSWORD_MAX,
  isRequired,
  INVALID_EMAIL,
  EMAIL_PATTERN,
  USER_EXISTS
} = require('../utils/errors');

const saltRounds = 10;

const User = new Schema({
    id: {
        type: String,
        unique: true
    },
    login: {
        type: String,
        required: [true, isRequired('Login')],
        minlength: [5, LOGIN_MIN],
        maxlength: [30, LOGIN_MAX],
        unique: true,
    },
    password: {
        type: String,
        required: [true, isRequired('Password')],
        minlength: [8, PASSWORD_MIN],
        maxlength: [45, PASSWORD_MAX],
    },
    mail: {
        type: String,
        required: [true, isRequired('Email')],
        unique: true,
        trim: true,
        match: [EMAIL_PATTERN, INVALID_EMAIL]
    }
}, {
    collection: 'user'
});

User.pre('save', function(next) {
  if(this.isNew || this.isModified('password')) {
    const document = this;
    bcrypt.hash(document.password, saltRounds)
        .then(hashedPassword => {
          document.password = hashedPassword;
          next();
          return;
        })
        .catch(err => next(err))
  } else {
      next();
      return;
  }
});

User.plugin(uniqueValidator, {
  message: USER_EXISTS
});

module.exports = mongoose.model('User', User);
