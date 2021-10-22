const UserController = require('../controller/UserController');

module.exports = app => {
	app.post('/register', UserController.registerUser);
};