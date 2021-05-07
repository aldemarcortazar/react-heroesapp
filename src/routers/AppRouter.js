import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import { authContext } from '../auth/authContext';
import LoginScreen from '../components/login/LoginScreen';
import DashBoardScreen from './DashBoardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
const AppRouter = () => {

    const { user } = useContext(authContext);
    return(
        <Router>
            <div>
                {/* <Navbar /> */}

                <Switch>
                    <PublicRoute 
                    exact
                    path="/login/" 
                    component={ LoginScreen }
                    isAuthenticate = { user.logged }
                    />

                    <PrivateRoute 
                        path="/" 
                        component={ DashBoardScreen }
                        isAuthenticated= { user.logged }
                    />
                </Switch>
            </div>
        </Router>
    );
}


export default AppRouter;