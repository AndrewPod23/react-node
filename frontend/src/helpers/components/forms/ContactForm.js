import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import '../../../index.css';
import { contactValidationSchema, validation } from '../validation/validation'

const Form = ({ onSubmit, register, errors }) => (
	<form onSubmit={onSubmit}>
		<div className="form-group">
			<Input
				name="name"
				label="Name"
				placeholder="Name"
				innerRef={register(contactValidationSchema)}
			/>
			{validation(errors, "name")}
			<Input
				name="surname"
				label="Surname"
				placeholder="Surname"
				innerRef={register(contactValidationSchema)}
			/>
			{validation(errors, "surname")}
			<Input
				name="mail"
				label="Email"
				placeholder="Email"
				innerRef={register(contactValidationSchema)}
			/>
			{validation(errors, 'mail')}
		</div>
		<div>
			<button className="btn btn-light btn-outline-dark mr-3" type="submit">Submit</button>
			<Link to="/contacts" className="btn btn-light btn-outline-danger">Back</Link>
		</div>

	</form>
)

export default Form;
