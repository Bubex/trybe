import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './auth';

import Login from './pages/Login';
import Home from './pages/Home';
import Currencies from './pages/Currencies';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
            )
        )} />
    )
};

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/currencies" component={Currencies} />
        </Switch>
    </BrowserRouter>
);

export default Routes;