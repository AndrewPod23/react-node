const ContactService = require('../service/contactService');
const { CONTACT_NOT_FOUND, CONTACTS_NOT_FOUND, VALIDATION_ERROR } = require('../utils/errors');
const { CONTACT_SAVED, CONTACT_DELETED } = require('../utils/response');
const { getErrors } = require('../utils/contactValidation');

const createContact = (req, res) => {
	const contact = req.body;

	return ContactService.createContact(contact)
		.then(() => res.status(200).send(CONTACT_SAVED))
		.catch(err => {
			if(err.name === VALIDATION_ERROR) { res.status(400).send(getErrors(err)) }
			else {res.status(500).send(err.message) }
		})
};

const getContacts = (req, res) => {
	return ContactService.getContacts()
		.then(contacts => {
			if(!contacts) res.status(404).send(CONTACTS_NOT_FOUND)
			res.status(200).json(contacts)
		})
		.catch(err => res.status(500).send(err.message))
};

const getContact = (req, res) => {
	const { id } = req.params;
	return ContactService.getContact(id)
		.then(contact => {
			if(!contact) res.status(404).send(CONTACT_NOT_FOUND)
			res.status(200).send(contact)
		})
		.catch(err => res.status(500).send(err.message))
	};

const deleteContact = (req, res) => {
	const { id } = req.params;

	return ContactService.deleteContact(id)
		.then(result => {
			if(!result) res.status(404).send(CONTACT_NOT_FOUND)
			res.status(200).send(CONTACT_DELETED)
		})
		.catch(err => res.status(500).send(err.message))
};

const editContact = (req, res) => {
	const { id } = req.params;
	const contact = req.body;

	return ContactService.editContact(id, contact)
		.then(result => {
			if(result.name === VALIDATION_ERROR) res.status(400).send(getErrors(result))
			res.status(200).send(CONTACT_SAVED)
		})
		.catch(err => res.status(500).send(err.message))
};

module.exports = {
	createContact,
	getContact,
	getContacts,
	deleteContact,
	editContact
};
