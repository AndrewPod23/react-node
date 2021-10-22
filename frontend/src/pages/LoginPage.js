import React, { useState } from 'react';
import LoginForm from '../helpers/components/forms/LoginForm';
import { useForm } from 'react-hook-form';
import AuthService from '../service/authService';
import { useHistory } from 'react-router-dom';
import '../index.css';

const LoginPage = () => {
	const { handleSubmit, register, errors } = useForm({
		validateCriteriaMode: 'all'
	});
	let history = useHistory();
	const [serverErrors, setServerErrors] = useState();

	const onSubmit = async data => {
		try {
			const response = await AuthService.signIn(data);
			localStorage.setItem('access_token', Object.values(response.data));
			setTimeout(() => history.push('/contacts'), 1000)
		} catch (err) {
			setServerErrors(err.response.data)
		}
	}
	console.log(serverErrors)
	return (
		<LoginForm register={register} onSubmit={handleSubmit(onSubmit)} errors={errors} serverErrors={serverErrors} />
	)
};

export default LoginPage;