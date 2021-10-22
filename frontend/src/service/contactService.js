import axiosInstance from '../config/axiosConfig';

const createContact = async data => {
	return await axiosInstance.post('/contacts/create', JSON.stringify(data))
		.then(res => res)
};

const deleteContact = async id => {
	return await axiosInstance.delete(`/contacts/${id}`)
		.then(res => res)
};

const getContact = async id => {
	return await axiosInstance.get(`/contacts/edit/${id}`)
		.then(contact => contact.data)
};

const getContacts = async () => {
	return await axiosInstance.get('/contacts')
		.then(contacts => contacts)
};

const editContact = async (data, id) => {
	return await axiosInstance.patch(`/contacts/edit/${id}`, JSON.stringify(data))
		.then(resp => resp)
};

export default {
	createContact,
	deleteContact,
	getContact,
	getContacts,
	editContact
};
