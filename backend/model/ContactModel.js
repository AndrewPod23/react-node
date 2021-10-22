const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const {
	isRequired,
	EMAIL_PATTERN,
	INVALID_EMAIL,
	getMinLength,
	CONTACT_EXISTS
} = require('../utils/errors');

const Contact = new Schema({
	id: {
		type: String,
		unique: true
	},
	name: {
		type: String,
		required: [true, isRequired('Name')],
		minlength: [2, getMinLength('Name', 2)]
	},
	surname: {
		type: String,
		required: [true, isRequired('Surname')],
		minlength: [2, getMinLength('Surname', 2)]
	},
	mail: {
		type: String,
		required: [true, isRequired('Email')],
		unique: true,
		match: [EMAIL_PATTERN, INVALID_EMAIL]
	}
}, {
	collection: 'contact'
});

Contact.plugin(uniqueValidator, {
	message: CONTACT_EXISTS
});

module.exports = mongoose.model('Contact', Contact);
