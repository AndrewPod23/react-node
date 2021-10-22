import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ id, name, surname, mail, onClick }) => {
	const props = {
		button: {
			type: 'button',
			className: 'btn btn-outline-danger',
			onClick
		}
	};

	return (
		<tr key={id}>
			<td><Link to={`/contacts/edit/${id}`}> {name} {surname}</Link></td>
			<td>{mail}</td>
			<td>
				<button {...props.button}>x</button>
			</td>
		</tr>
	)
};

export default Table;
