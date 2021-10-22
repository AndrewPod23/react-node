import React from 'react';

const Input = ({ name, type, placeholder, label, innerRef }) => {
	const props = {
		label: {
			className: 'mb-0 font-weight-normal'
		},
		input: {
			className: 'form-control font-weight-normal',
			name,
			type,
			placeholder,
			ref: innerRef
		},
		container: {
			className: 'pt-2'
		}
	};

	return (
		<div {...props.container}>
			<label {...props.label}>
				{label}
			</label>
			<input {...props.input} />
		</div>
	)
};

export default Input;
