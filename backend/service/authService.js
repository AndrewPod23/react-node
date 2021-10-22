const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
	USER_NOT_FOUND,
	INVALID_PASSWORD
} = require('../utils/errors');
const User = require('../model/UserModel');

const signIn = (login, password) => {
	return User.findOne({ login })
		.then(user => {
			if (!user) {
				throw new Error(USER_NOT_FOUND)
			} else return bcrypt.compare(password, user.password)
				.then(result => {
					if (!result) throw new Error(INVALID_PASSWORD)
					return generateToken(user)
				})
		})

};

const generateToken = ({ _id, login }) => {
	const secretKey = process.env.JWT_SECRET;
	const payload = {
		id: _id,
		login
	};
	const expiresIn = 30 * 30; //15min

	return jwt.sign(payload, secretKey, { expiresIn });
};

module.exports = {
	signIn,
	generateToken
};
