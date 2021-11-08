import React from 'react';
import {useSelector} from 'react-redux'
import { Divider, Grid, Paper } from '@mui/material';
import SubHeaderImprimir from './SubHeaderImprimir';
import DetalleHeader from './DetalleHeader';
import DetalleExchange from './DetalleExchange';
import SubHeaderCompra from './SubHeaderCompra';
import _ from 'lodash';
const BodyVisualizarCompra = () => {
     const { transaccionView,autos,usuarios,servicios } = useSelector((state) => state.OperacionReducer);
    
    return (
        <Grid container alignItems="center" justify="space-between" className='margenTopcontainer'>
            <SubHeaderImprimir />
            <Grid item container>
                <Paper variant="outlined" className='paperContainer'>
                    <Grid container className='visualizarDetallepadding'>
                        <SubHeaderCompra nombreUsuario={_.filter(usuarios, (elem) => elem._id === transaccionView.user)[0].name} date={transaccionView.date}/>
                        <Divider className='dividerPago dividerAll' />
                        <Grid container>
                            <Grid item xs={5}>
                                <DetalleExchange nombre={"Transaccion"} costo={_.filter(servicios, (elem) => elem._id === transaccionView.service)[0].cost} auto={_.filter(autos, (elem) => elem._id === transaccionView.car)[0].name} />
                            </Grid>
                            <Grid container item xs={2} justify='center'>
                                <Divider orientation="vertical" variant='fullWidth'  className='dividerNuevo' />
                            </Grid>
                            <Grid item xs={5}>
                                <DetalleHeader pagoTotal={transaccionView.total}  />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default BodyVisualizarCompra;
