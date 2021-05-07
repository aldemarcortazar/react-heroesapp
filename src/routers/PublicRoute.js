import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';


const PublicRoute = ({
    isAuthenticate,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component = { ( props ) => (
                ( !isAuthenticate )
                  ? <Component { ...props } />
                  : <Redirect to="/" />
            )}

        />
    );

}

PublicRoute.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRoute ;