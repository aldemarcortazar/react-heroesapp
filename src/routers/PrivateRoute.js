import React from 'react';
import PropTypes from 'prop-types';

import { Route , Redirect } from 'react-router';
// en los argumentos es rest
const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest // para que caiga el resto como path
}) => {
    // {/* //por aqui en expred */}

    localStorage.setItem('lastpath' , rest.location.pathname);

    return (
        <Route { ...rest }
            component = { ( props ) => (
                ( isAuthenticated )
                  ? <Component { ...props }/>
                  : <Redirect to="/login"/>
            )}
        />
    );
}


PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
export default PrivateRoute;