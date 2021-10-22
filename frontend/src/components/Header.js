import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Header = () => {
	const styles = {
		navbar: 'navbar navbar-dark bg-dark d-flex flex-row ',
	};
	let history = useHistory();

	const logout = async () => {
		localStorage.removeItem('access_token')
		if (!localStorage.getItem('access_token')) history.push('/')
	};

	const getAuth = () => {
		return localStorage.getItem('access_token');
	};

	if (!getAuth()) {
		return (<></>)
	} else return (
		<nav className={styles.navbar}>
			<div className="d-flex justify-content-start">
				<Link className="navbar-brand" to="/contacts">Home</Link>
				<Link className="nav-link text-light" to="/contacts/create">Create</Link>
			</div>
			<button className="btn btn-link nav-link text-light" onClick={() => logout()}>Logout</button>
		</nav>
	)
};

export default Header;
