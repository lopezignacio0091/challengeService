import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import { userIsLogIn } from '../actions/LoginActions';
import Login from '../components/layout/login/FormularioLogin';
import ProtectedRoute from './ProtectedRoute';
import HomePage from '../components/pages/HomePage';

const MainRoute = () => {

    const { autorizado } = useSelector((state) => state.LoginReducer);
    const isAuth = autorizado;
    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("USER_DASHBOARD");
        if (loggedInUser) {
          const UserData = JSON.parse(loggedInUser);
          dispatch(userIsLogIn(UserData));
          history.push('/app/common/Service');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autorizado]);

    return (
        <Switch>
            <Route exact={true} path={["/", "/Login"]} component={Login} />
            <ProtectedRoute path='/app/common' component={HomePage} isAuth={isAuth} />
        </Switch>
    );
}

export default MainRoute;
