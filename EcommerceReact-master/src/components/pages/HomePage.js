import  React from 'react'
import { Grid } from '@mui/material';
import NavBar from '../layout/nav/Nav';
import AppRoute from '../../route/AppRoute';

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <AppRoute />
        </>
    )
}
export default HomePage;