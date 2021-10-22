import React from 'react';

import ContactService from '../service/contactService';
import TableHeader from '../helpers/components/TableHeader';
import Table from '../helpers/components/Table';

class ContactList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: []
		};
	};

	async componentDidMount() {
		await this.loadContacts();
	};

	loadContacts = async () => {
		await ContactService.getContacts()
			.then(contacts => this.setState({
				contacts: contacts.data
			}))
			.catch(err => console.error(err))
	};

	deleteContact = async id => {
		await ContactService.deleteContact(id)
			.then(async res => {
				if (res.status === 200) {
					await this.loadContacts();
				}
			})
			.catch(err => console.error(err))
	};

	render() {
		return Object.keys(this.state.contacts).length === 0 ? (
			''
		) : (
				<table className="table container table-hover">
					<TableHeader />
					{this.state.contacts.map(({ _id, name, surname, mail }) => (
						<tbody key={_id}>
							<Table
								id={_id}
								name={name}
								surname={surname}
								mail={mail}
								onClick={() => this.deleteContact(_id)}
							/>
						</tbody>
					))}
				</table>
			)
	}
}

export default ContactList;
