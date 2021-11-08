import React from 'react'
import { useEffect } from 'react';
import { Grid, Box, Paper } from '@mui/material';
import Tabla from '../layout/transaction/Tabla';
import { useDispatch, useSelector } from 'react-redux';
import PropietarioSeccion from '../layout/transaction/newTrans/PropietarioSeccion';
import AutosPropietario from '../layout/transaction/newTrans/AutosPropietarios';
import ResumenGenerico from '../layout/transaction/newTrans/ResumenGenerico';
import '../../scss/transaction.scss'
import BtnComprar from '../layout/transaction/newTrans/BtnComprar';

const TransactionPage = () => {
    const dispatch = useDispatch();
    const { total,valorServicio } = useSelector((state) => state.TransactionReducer);
    return (
        <Box
            sx={{
                marginTop: '1%',
                padding: '2%',
                backgroundColor: 'rgb(211, 214, 215)',
            }}
        >
            <Grid container spacing={3} >
                <Grid container xs={8}>
                    <Paper style={{'width':'100%', 'padding':'5%'}}>
                        <Grid item xs={12}>
                            <PropietarioSeccion />
                        </Grid>
                        <Grid item xs={12} className="gridItem">
                            <AutosPropietario />
                        </Grid>
                       
                        <Grid item xs={12} className="gridItem">
                            <BtnComprar />
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <ResumenGenerico
                        labelHeader1={'Costo Servicio'}
                        labelHeader2={'Costo Mano de obra'}
                        montoheader1={valorServicio}
                        montoheader2={total}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
export default TransactionPage;