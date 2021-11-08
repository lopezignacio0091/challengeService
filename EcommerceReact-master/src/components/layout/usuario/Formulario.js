import React from 'react';
import { useDispatch } from 'react-redux';
import { getLoginUser } from '../../../actions/LoginActions';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid, Card, Typography, Divider } from '@mui/material';
import * as Yup from "yup";
import _ from 'lodash';
import MyTextField from './MyTextField';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import '../../../scss/login.scss';
import { stringify } from 'querystring';


const FormularioUsuario = () => {
    const dispatch = useDispatch();


    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().min(6, 'Password has to be longer than 6 characters!').required('Password is required!'),
        name: Yup.string().min(4, 'Name has to be longer than 4 characters').required('Password is required!')
    });

    const create = (values) => {
        // dispatch(getLoginUser({ 'email': values.email, 'password': values.password }));
        console.log(JSON.stringify(values));
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                name: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    create(values);
                    setSubmitting(false);
                    resetForm();
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Form>
                    <Grid container direction="row" style={{ 'padding': '5%' }} justifyContent="center" alignItems="center" spacing={2}>
                        <Card className='cardForm'>
                            <Grid item xs={12} md={12} lg={12} >
                                <Typography className="tituloForm">Nuevo Usuario</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <label className='label'>Nombre *</label><br></br>
                                <MyTextField name="name" type="text" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <label className='label'>Email *</label><br></br>
                                <MyTextField name="email" type="text" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <label className='label'>Password *</label><br></br>
                                <MyTextField name="password" type="password" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <Divider />
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
                    </Grid>

                </Form>

            )}
        </Formik >
    );
}

export default FormularioUsuario;
