import React, { useState } from 'react';
import UserRegisterForm from '../helpers/components/forms/UserRegisterForm';
import RegisterService from '../service/registerService';
import Banner from '../helpers/components/Banner';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
	const { handleSubmit, register, errors, watch } = useForm({
		validateCriteriaMode: 'all'
	});
	const [isClosed, setIsClosed] = useState(true);
	const [error, setError] = useState('');
	const history = useHistory();

	const handleClose = () => {
		setIsClosed(true);
	};

	const parseErrors = error => {
		return Object.values(error).join(' ')
	}

	const registerUser = async data => {
		await RegisterService.registerUser(data)
			.then(() => history.push('/'))
			.catch(err => {
				setError(parseErrors(err.response.data))
				setIsClosed(false)
			})
	}

	return (
		<div>
			{!isClosed && <Banner title={error} onClose={handleClose} isClosed={isClosed} />}
			<UserRegisterForm onSubmit={handleSubmit(registerUser)} register={register} errors={errors} watch={watch} />
		</div>
	);
};

export default RegisterPage;