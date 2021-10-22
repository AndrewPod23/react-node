import React from 'react';

import ContactService from '../service/contactService';
import EditContact from './EditContact';
import { history } from '../App';

class ContactEditContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	};

	async componentDidMount() {
		await this.getContact(this.props.match.params.id)
	}

	getContact = async id => {
		await ContactService.getContact(id)
			.then(contact => this.setState({ ...contact }))
			.catch(err => console.error(err))
	}

	editContact = async data => {
		await ContactService.editContact(data, this.props.match.params.id)
			.then(() => history.push('/contacts'))
			.catch(err => console.error(err))
	}

	render() {
		return Object.keys(this.state).length === 0 ? (
			''
		) : (<EditContact {...this.state} onSubmit={this.editContact} />)
	}
};

export default ContactEditContainer;
