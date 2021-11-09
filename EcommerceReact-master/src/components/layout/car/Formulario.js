import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createCar} from '../../../actions/CarAction';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid, Card, Typography, Divider, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import * as Yup from "yup";
import _ from 'lodash';
import MyTextField from './MyTextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import '../../../scss/car.scss';
import moment from 'moment';
const FormularioCar = () => {
    const dispatch = useDispatch();
    const { usuarios, autoEditar } = useSelector((state) => state.CarReducer);

    const SignupSchema = Yup.object().shape({
        modelo: Yup.string().required('Modelo is required!'),
        marca: Yup.string().min(4, 'Marca has to be longer than 4 characters!').required('Marca is required!'),
        color: Yup.string().min(4, 'Colour has to be longer than 4 characters!').required('Colour is required!'),
        patente: Yup.string().min(4, 'Patent has to be longer than 4 characters!').required('Patent is required!'),
        passwordUser: _.isEmpty(autoEditar) && Yup.string().min(4, 'Password has to be longer than 6 characters!').required('Password is required!'),
        date: Yup.date().required("Year is required"),
        nameUser: Yup.string().min(4, 'Name user  has to be longer than 6 characters!').required('Name user is required!'),
        emailUser: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    });

    const postCar = (values) => {
        dispatch(createCar(values));
        //alert(JSON.stringify(values));
    }

    return (
        <Formik
            initialValues={{
                modelo: !_.isEmpty(autoEditar) ? autoEditar.name : '',
                marca: !_.isEmpty(autoEditar) ? autoEditar.brand: '',
                color: !_.isEmpty(autoEditar) ? autoEditar.colour : '',
                tipo: !_.isEmpty(autoEditar) ? autoEditar.type : '',
                patente: !_.isEmpty(autoEditar) ? autoEditar.patent: '',
                date: !_.isEmpty(autoEditar) ? autoEditar.year : new Date('2014-08-18T21:11:54'),
                nameUser: !_.isEmpty(autoEditar) ? _.filter(usuarios, (elem) => elem._id === autoEditar.user)[0].name : '',
                emailUser: !_.isEmpty(autoEditar) ? _.filter(usuarios, (elem) => elem._id === autoEditar.user)[0].email : '',
                passwordUser: !_.isEmpty(autoEditar) ? _.filter(usuarios, (elem) => elem._id === autoEditar.user)[0].name : '',
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
            {({ submitForm, isSubmitting, initialValues, setFieldValue,values }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Form className='formularioAuto'>
                        <Card className='cardForm'>
                            <Grid item xs={12} md={12} lg={12} container justifyContent="center" >
                                <DirectionsCarIcon className="iconoLogin" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <Typography className="tituloForm">Register Car!</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <label className='label'>Modelo *</label><br></br>
                                <MyTextField name="modelo" type="text" />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <FormControl fullWidth>
                                <label className='label'>Marca *</label><br></br>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values.marca}
                                        label="Age"
                                        onChange={(value) => setFieldValue('marca', value.target.value)}
                                    >
                                        <MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
                                        <MenuItem value={'Ford'}>Ford</MenuItem>
                                        <MenuItem value={'Volkswagen'}>Volkswagen</MenuItem>
                                        <MenuItem value={'Volkswagen'}>Otro</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <label className='label'>Color *</label><br></br>
                                <MyTextField name="color" type="text" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <FormControl fullWidth>
                                <label className='label'>Tipo *</label><br></br>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values.tipo}
                                        label="Age"
                                        onChange={(value) => setFieldValue('tipo', value.target.value)}
                                    >
                                        <MenuItem value={"Auto"}>Auto</MenuItem>
                                        <MenuItem value={'Camioneta'}>Camioneta</MenuItem>
                                        <MenuItem value={'Moto'}>Moto</MenuItem>
                                        <MenuItem value={'Otro'}>Otro</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <label className='label'>Patente *</label><br></br>
                                <MyTextField name="patente" type="text" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <label className='label'>Año *</label><br></br>
                                <DesktopDatePicker
                                    inputFormat="MM/dd/yyyy"
                                    value={values.date}
                                    onChange={(date) => { setFieldValue('date',  moment(Date.parse(date.toDateString())).format()) }}
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
                            {_.isEmpty(autoEditar) &&
                                <Grid item xs={12} md={12} lg={12} className="gridItem">
                                    <label className='label'>Password Generica *</label><br></br>
                                    <MyTextField name="passwordUser" type="password" />
                                </Grid>}
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
