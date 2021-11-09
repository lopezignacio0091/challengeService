import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {abrirFormularioAuto} from '../../../actions/CarAction';
import MUIDataTable from "mui-datatables";
import { Grid, Box, Tooltip, IconButton } from '@mui/material';
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import moment from 'moment';
import Fab from '@mui/material/Fab';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DialogUtils from '../utils/DialogUtils';
import FormularioCar from './Formulario';

const TablaTransaction = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    const { usuarios, autos,openFormulario } = useSelector((state) => state.CarReducer);


    const options = {
        selectableRows: 'none',
        download: true,
        search: true,
        print: false,
        filter: true,
        confirmFilters: false,
        viewColumns: false,
        pagination: true,
        enableNestedDataAccess: '.',
    };


    const columns = [
        {
            name: "year",
            label: "Año",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value) => moment(value).format('L'),
            }
        },

        {
            name: "user",
            label: "Propietario",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value) => _.filter(usuarios, (elem) => elem._id === value)[0].name,
            }
        },
        {
            name: "type",
            label: "Tipo",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "colour",
            label: "Color",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "_id",
            label: " ",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value) => (
                    <>
                        <Tooltip title="Ver auto">
                            <IconButton onClick={() => alert("Ver auto")}>
                                <RemoveRedEyeIcon />
                            </IconButton>
                        </Tooltip>
                    </>
                ),
            }
        },
    ];



    return (
        <Grid container>
            <Grid item xs={12}>
                <ThemeProvider theme={theme}>
                    <MUIDataTable
                        className="tablaTransaccion"
                        data={autos}
                        columns={columns}
                        options={options}
                        title={"Autos"}
                    />
                </ThemeProvider>
            </Grid>
            <Fab variant="extended" className='botonFlotante' onClick={() => { dispatch(abrirFormularioAuto(true)) }}>
                <DirectionsCarIcon sx={{ mr: 1 }} />
                Register Car
            </Fab>
            <Grid>
                <DialogUtils open={openFormulario} cerrar={() => { dispatch(abrirFormularioAuto(false)) }} contenido={<FormularioCar />} />
            </Grid>
        </Grid>
    );
}

export default TablaTransaction;
