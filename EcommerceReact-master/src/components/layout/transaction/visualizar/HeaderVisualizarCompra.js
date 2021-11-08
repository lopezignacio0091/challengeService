import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

const HeaderVisualizarCompra = () => {
    let history = useHistory();
    //const { client,transaccion } = useSelector((state) => state.ChequeCompraReducer);

    return (
        <Grid container alignItems="center" className='header headerCompra'>
            <Grid item container justify="center" alignItems="center" xs={1}>
                <IconButton aria-label="delete" size="small" className='btnClose' onClick={()=>{history.push('/App/Common/Moneda')}}>
                    <CloseRoundedIcon fontSize="inherit" />
                </IconButton>
            </Grid>
            <Grid item xs={7} className='headerTitulo'>
                Operacion {'xxxx'} - Compra de Moneda - {'Name Usuario'}
            </Grid>
        </Grid>    
    );
}

export default HeaderVisualizarCompra;