const contactController = require('../controller/ContactController');
const { authorizeRequest } = require('../middleware/index');

module.exports = app => {
	app.post('/contacts/create', authorizeRequest, contactController.createContact),
	app.get('/contacts', authorizeRequest, contactController.getContacts),
	app.get('/contacts/edit/:id', authorizeRequest, contactController.getContact),
	app.delete('/contacts/:id', authorizeRequest, contactController.deleteContact),
	app.patch('/contacts/edit/:id', authorizeRequest, contactController.editContact)
}