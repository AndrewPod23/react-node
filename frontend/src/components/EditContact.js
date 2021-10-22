import React from 'react';
import { useForm } from 'react-hook-form';

import ContactForm from '../helpers/components/forms/ContactForm';

const EditContact = props => {
	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			...props
		},
		validateCriteriaMode: 'all'
	});

	return (
		<div className="container">
			<h1>Edit contact</h1>
			<ContactForm
				register={register}
				onSubmit={handleSubmit(contact => props.onSubmit({ ...contact }))}
				errors={errors}
			/>
		</div>
	)
};

export default EditContact;
