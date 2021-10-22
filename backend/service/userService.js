const User = require('../model/UserModel');

const registerUser = async ({ login, password, mail }) => {
	const newUser = new User({ login, password, mail });

	return newUser.save()
		.then(result => result)
};

module.exports = {
	registerUser
};
