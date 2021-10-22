const authController = require('../controller/AuthController');

module.exports = app => {
	app.post('/', authController.signIn)
};