import React from 'react'
import { Grid, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAutos} from '../../actions/CarAction';
import TablaAutos from '../layout/car/Tabla';
import Progress from '../layout/progress/Progress';
import AlertUtils from '../layout/utils/AlertUtils';



const CarPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAutos());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { loading, error, mensajeError } = useSelector((state) => state.CarReducer);
    if (loading) return <Progress />
    if (error) return <AlertUtils TYPE="error" LABEL={mensajeError} />

    return (
        <>
            <Box
                sx={{
                    marginTop: '1%',
                    padding: '2%',
                    backgroundColor: 'rgb(234, 238, 243)',
                }}
            >
                <Grid container >
                    <Grid item xs={12}>
                        <TablaAutos />
                    </Grid>
                </Grid>
            </Box>
          
        </>
    )
}
export default CarPage;