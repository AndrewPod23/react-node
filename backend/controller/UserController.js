const UserService = require('../service/userService');
const { USER_SAVED } = require('../utils/response');
const { getErrors } = require('../utils/userValidation');
const { VALIDATION_ERROR } = require('../utils/errors');


const registerUser = (req, res) => {
	const user = req.body;

	return UserService.registerUser(user)
		.then(() => res.status(200).send(USER_SAVED))
		.catch(err => {
			if(err.name === VALIDATION_ERROR) { res.status(400).send(getErrors(err)) }
			else { res.status(500).send(err.message) }
		})
};

module.exports = {
	registerUser
};
