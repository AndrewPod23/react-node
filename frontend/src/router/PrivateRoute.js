import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render={props => {
    const isLoggedIn = localStorage.getItem('access_token');

    if (!isLoggedIn) {
      return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }

    return <Component {...props} />
  }} />
);

export default PrivateRoute;
