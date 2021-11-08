import { Grid } from '@material-ui/core';
import React from 'react';

const DetalleExchange = ({ nombre, costo, auto }) => {

    return (
        <Grid container>
            <Grid item xs={6} container direction="column" justifycontent="space-between" alignItems="flex-start" >
                <Grid item className='visualizarDetalleLabel'>Nombre</Grid>
                <Grid item className='visualizarDetalleLabel'>Auto</Grid>
                <Grid item className='visualizarDetalleLabel'>Costo</Grid>
            </Grid>
            <Grid item xs={6} container direction="column" justifycontent="space-between" alignItems="flex-end" >
                <Grid item className='visualizarDetalleLabel'>{nombre} </Grid>
                <Grid item className='visualizarDetalleLabel'>{auto}</Grid>
                <Grid item className='visualizarDetalleLabel'>{costo}</Grid>
            </Grid>
        </Grid>
    );
}

export default DetalleExchange;
