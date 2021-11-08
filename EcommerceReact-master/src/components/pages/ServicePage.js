import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {abrirFormularioAuto} from '../../actions/CarAction';
import { Grid, Box } from '@mui/material';
import ServiceList from '../layout/serviceCar/ServiceList';
import DialogUtils from '../layout/utils/DialogUtils';
import FormularioAuto from '../layout/car/Formulario';
import '../../scss/service.scss'


const CarPage = () => {
    const dispatch = useDispatch();
    const { openFormulario } = useSelector((state)=> state.CarReducer);
    return (
        <Box
            sx={{
                marginTop: '1%',
                padding: '2%',
                backgroundColor: 'rgb(234, 238, 243)',
            }}
        >
            <Grid container >
                <Grid item xs={12}>
                    <ServiceList/>
                </Grid>
            </Grid>
            <Grid>
                <DialogUtils open={openFormulario} cerrar={()=>{dispatch(abrirFormularioAuto(false))}} contenido={<FormularioAuto/>} />
            </Grid>
        </Box>
    )}
export default CarPage