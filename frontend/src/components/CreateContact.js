import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Banner from '../helpers/components/Banner';
import ContactService from '../service/contactService';
import ContactForm from '../helpers/components/forms/ContactForm';
import { useHistory } from 'react-router-dom';

const CreateContact = () => {
	const { handleSubmit, register, errors } = useForm({
		validateCriteriaMode: 'all'
	});
	const history = useHistory();
	const [isClosed, setIsClosed] = useState(true);
	const [error, setError] = useState('');

	const parseErrors = error => {
		return Object.values(error).join(' ')
	}

	const handleClose = () => {
		setIsClosed(true);
	};

	const onSubmit = async data => {
		return await ContactService.createContact(data)
			.then(() => history.push('/contacts'))
			.catch(err => {
				setError(parseErrors(err.response.data));
				setIsClosed(false)
			})
	};

	return (
		<div className="container">
			<h1>Create contact</h1>
			{!isClosed && <Banner title={error} onClose={handleClose} isClosed={isClosed} />}
			<ContactForm register={register} onSubmit={handleSubmit(onSubmit)} errors={errors} />
		</div>
	);
};

export default CreateContact;
