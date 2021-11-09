import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import HomePage from '../components/pages/HomePage';
import TransactionPage from '../components/pages/TransactionPage';
import ServicePage from '../components/pages/ServicePage';
import NewTransaction from '../components/pages/NewTransaccionPage';
import OperacionPage from '../components/pages/OperacionContainerPage';
import Cars from '../components/pages/CarPage';
import { useSelector } from 'react-redux';

const AppRoute = () => {
    const { autorizado } = useSelector(state => state.LoginReducer);
    const isAuth = autorizado;
    return (
        <>
            <Switch>
                <ProtectedRoute path='/app/common/Service' component={ServicePage} isAuth={isAuth} />
                <ProtectedRoute path='/app/common/Transactions' component={TransactionPage} isAuth={isAuth} />
                <ProtectedRoute path='/app/common/Cars' component={Cars} isAuth={isAuth} />
                <ProtectedRoute path='/app/common/NewTransaction' component={NewTransaction} isAuth={isAuth} />
                <Route path='/app/common/Viewtransaction/:id' component={OperacionPage} isAuth={isAuth} />
            </Switch>
        </>
    )
}

export default AppRoute;