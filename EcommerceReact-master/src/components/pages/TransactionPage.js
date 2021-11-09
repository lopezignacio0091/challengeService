import React from 'react'
import { useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import Tabla from '../layout/transaction/Tabla';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../actions/TransactionAction';
import Progress from '../layout/progress/Progress';
import { useHistory } from 'react-router-dom';
import '../../scss/transaction.scss';

const TransactionPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { loading, viewIdOperacion, compraOk } = useSelector((state) => state.TransactionReducer);

    useEffect(() => {
        dispatch(getTransactions());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (compraOk) history.push(`/app/common/Viewtransaction/${viewIdOperacion}`);
    if (loading) return <Progress />


    return (
        <Box
            sx={{
                marginTop: '1%',
                padding: '2%',
                backgroundColor: 'rgb(234, 238, 243)',
            }}
        >
            <Grid container >
                <Grid item xs={12} >
                    <Tabla />
                </Grid>

            </Grid>
        </Box>
    )
}
export default TransactionPage;