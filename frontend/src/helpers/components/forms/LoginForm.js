import React from 'react';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { validation, userValidationSchema } from '../validation/validation';
import '../../../index.css';

const LoginForm = ({ onSubmit, register, errors, serverErrors }) => {
	const props = {
		form: {
			className: 'd-flex flex-column justify-content-center container shadow p-3 bg-white rounded',
			style: { maxWidth: '460px' },
			onSubmit: onSubmit
		}
	};

	return (
		<form {...props.form}>
			<Input
				name="login"
				placeholder="Login"
				type="text"
				label="Login"
				innerRef={register(userValidationSchema)}
			/>
			{validation(errors, 'login')}
			<Input
				name="password"
				placeholder="Password"
				type="password"
				label="Password"
				innerRef={register(userValidationSchema)}
			/>
			{validation(errors, 'password')}
			{serverErrors && <p> {serverErrors}</p>}
			<div>
				Create an account? <Link to="/register">Sign up</Link>
			</div>
			<button type="submit" className="btn btn-primary mt-2">Sign In</button>
		</form>
	)
};

export default LoginForm;