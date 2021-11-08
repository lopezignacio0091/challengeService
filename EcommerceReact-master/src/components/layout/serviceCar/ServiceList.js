import { Alert, Grid, Button } from '@mui/material';
import {abrirFormularioAuto} from '../../../actions/CarAction';
import React, { Fragment } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import CarItem from './ServiceItem';
import Fab from '@mui/material/Fab';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
const MovieList = () => {
    const dispatch = useDispatch();
    //const { movies} = useSelector(state => state.MoviesReducer);
    const services = [{ 'id': 1, 'type': 'Cambio de aceite', 'cost': 800 },
    { 'id': 2, 'type': 'Cambio de filtro', 'cost': 600 },
    { 'id': 3, 'type': 'Cambio de correa', 'cost': 500 },
    { 'id': 4, 'type': 'Revision general', 'cost': 850 },
    { 'id': 5, 'type': 'Otro', 'cost': 800 },
    ]
   //if (movies.length === 0) return <Alert severity="info">No hay pelicula disponible</Alert>
    return (
        <Fragment>

            <Grid container spacing={1} alignItems="stretch">
                {services.map((elem, index) => (
                    <Grid item xs={4} key={index}>
                        <CarItem data={elem} />
                    </Grid>
                ))}
            </Grid>  
            <Fab variant="extended" className='botonFlotante' onClick={() => {dispatch(abrirFormularioAuto(true))}}>
                <DirectionsCarIcon sx={{ mr: 1 }} />
                Register Car
            </Fab>
        </Fragment>
    )
}

export default MovieList;
