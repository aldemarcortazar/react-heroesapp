import React , { useContext } from 'react';
import { authContext } from '../../auth/authContext';
import { types } from '../../types/types';


const LoginScreen = ( { history } ) => {
    const { dispatch } = useContext( authContext );
    
    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastpath') || '/';
        dispatch({
            type: types.login,
            paiload: {
                name: 'aldemar',
            }
        });

        history.replace(lastPath);
    }
    // console.log( dispatch );
    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    );
}

export default LoginScreen;