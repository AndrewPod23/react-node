const Contact = require('../model/ContactModel');

const createContact = async contact => {
	const newContact = new Contact(contact);

	return newContact.save()
		.then(res => res)
};

const editContact = (id, contact) => {
	return Contact.findByIdAndUpdate(id, contact)
		.then(res => res)
};

const getContact = id => {
	return Contact.findById(id)
		.then(contact => contact)
};

const deleteContact = id => {
	return Contact.findByIdAndRemove(id)
		.then(res => res)
};

const getContacts = () => {
	return Contact.find()
		.then(contacts => contacts)
};

module.exports = {
	createContact,
	editContact,
	getContact,
	getContacts,
	deleteContact
};
