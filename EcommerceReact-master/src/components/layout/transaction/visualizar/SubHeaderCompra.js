import { Grid } from '@mui/material';
import React from 'react';
import moment from 'moment';
const SubHeaderCompra = ({nombreUsuario,date}) => {

    return (
        <Grid container>
            <Grid item xs={6} container direction="column" justifycontent="space-between" alignItems="flex-start" >
                <Grid item className='visualizarDate' >
                    {moment(date).format('l')}
                </Grid>
                <Grid item className='visualizarDetalleClienteNombre'>
                    Transaccion
                </Grid>
            </Grid>
            <Grid item xs={6} container direction="column" justifycontent="space-between" alignItems="flex-end" >
                <Grid item className='visualizarDetalleCliente'>Usuario: {nombreUsuario}</Grid>
            </Grid>
        </Grid>
    );
}

export default SubHeaderCompra;
