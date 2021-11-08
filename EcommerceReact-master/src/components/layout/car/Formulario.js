import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid, Card, Typography, Divider, Stack } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import * as Yup from "yup";
import _ from 'lodash';
import MyTextField from './MyTextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import '../../../scss/car.scss';

const FormularioCar = () => {
    const dispatch = useDispatch();
    
    const SignupSchema = Yup.object().shape({
        marca: Yup.string().min(4, 'Marca has to be longer than 6 characters!').required('Marca is required!'),
        color: Yup.string().min(4, 'Colour has to be longer than 6 characters!').required('Colour is required!'),
        patente: Yup.string().min(4, 'Patent has to be longer than 6 characters!').required('Patent is required!'),
        passwordUser: Yup.string().min(6, 'Password has to be longer than 6 characters!').required('Password is required!'),
        date: Yup.date().required("Year is required"),
        nameUser: Yup.string().min(4, 'Name user  has to be longer than 6 characters!').required('Name user is required!'),
        emailUser: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    });

    const postCar = (values) => {
        //dispatch(getLoginUser({ 'email': values.email, 'password': values.password }));
        alert(JSON.stringify(values));
    }

    return (
        <Formik
            initialValues={{
                marca: '',
                color: '',
                patente: '',
                password: '',
                date: new Date('2014-08-18T21:11:54'),
                nameUser: '',
                emailUser: '',
                passwordUser: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    postCar(values);
                    setSubmitting(false);
                    resetForm();
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting, initialValues, setFieldValue }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Form className='formularioAuto'>
                            <Card className='cardForm'>
                                <Grid item xs={12} md={12} lg={12} container justifyContent="center" >
                                    <DirectionsCarIcon className="iconoLogin" />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    <Typography className="tituloForm">Register Car!</Typography>
                                </Grid>

                                <Grid item xs={12} md={12} lg={12} className="gridItem">
                                    <label className='label'>Marca *</label><br></br>
                                    <MyTextField name="marca" type="text" />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className="gridItem">
                                    <label className='label'>Color *</label><br></br>
                                    <MyTextField name="color" type="text" />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className="gridItem">
                                    <label className='label'>Patente *</label><br></br>
                                    <MyTextField name="patente" type="text" />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className="gridItem">
                                    <label className='label'>Año *</label><br></br>
                                    <DesktopDatePicker
                                        label="Date desktop"
                                        inputFormat="MM/dd/yyyy"
                                        value={initialValues.date}
                                        onChange={(date) => { setFieldValue('date', date)}}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className="gridItem">
                                    <Alert severity="info">Por favor ingresar los datos del propietario  </Alert>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className="gridItem">
                                    <Divider />
                                </Grid>

                                <Grid item xs={12} md={12} lg={12} className="gridItem">
                                    <label className='label'>Nombre *</label><br></br>
                                    <MyTextField name="nameUser" type="text" />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className="gridItem">
                                    <label className='label'>Email *</label><br></br>
                                    <MyTextField name="emailUser" type="text" />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} className="gridItem">
                                    <label className='label'>Password Generica *</label><br></br>
                                    <MyTextField name="passwordUser" type="password" />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    {isSubmitting && <LinearProgress />}
                                </Grid>
                                <Grid container spacing={3} className="gridItem">

                                    <Grid item xs={12} md={6} lg={6} >
                                        <Button
                                            variant="contained"
                                            disabled={isSubmitting}
                                            onClick={submitForm}
                                            className='btnAceptar'

                                        >
                                            Enviar
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6} >
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            disabled={isSubmitting}
                                            onClick={() => { alert('cancelado') }}
                                            className="btnCancelar"
                                        >
                                            Cancelar
                                        </Button>
                                    </Grid>

                                </Grid>

                            </Card>
                    </Form>
                </LocalizationProvider>

            )
            }
        </Formik >
    );
}

export default FormularioCar;
