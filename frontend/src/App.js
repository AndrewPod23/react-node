import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import ContactList from './components/ContactList';
import CreateContact from './components/CreateContact';
import ContactEditContainer from './components/ContactEditContainer';
import PrivateRoute from './router/PrivateRoute';

export const history = createBrowserHistory();

const App = () => {
	return (
		<Router history={history}>
			<Header />
			<div>
				<Switch>
					<Route path="/" exact component={LoginPage} />
					<Route path="/register" component={RegisterPage} />
					<PrivateRoute path="/contacts" exact component={ContactList} />
					<PrivateRoute path="/contacts/create" exact component={CreateContact} />
					<PrivateRoute path="/contacts/edit/:id" component={ContactEditContainer} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
