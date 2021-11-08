import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { Grid, Box } from '@mui/material';
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import NuevoService from './CustomToolbar';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';


const TablaTransaction = () => {
  
    
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    const { transacciones,usuarios,servicios,autos } = useSelector((state) => state.TransactionReducer);


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
        customToolbar: () => {
            return <NuevoService />;
        },
    };


    const columns=[
        {
            name: "date",
            label: "Fecha",
            options: {
                filter: true,
                sort: true,
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
            name: "service",
            label: "Tipo Servicio",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value) => _.filter(servicios, (elem) => elem._id === value)[0].type,
            }
        },
        {
            name: "car",
            label: "Auto",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value) => _.filter(autos, (elem) => elem._id === value)[0].name,
            }
        },
        {
            name: "total",
            label: "Total",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value) => `$ ${value}`,
            }
        },
    ];



    return (
        <Grid container>
            <Grid item xs={12}>
            <ThemeProvider theme={theme}>
                <MUIDataTable
                    //className="tablaCursos"
                    data={transacciones}
                    columns={columns}
                    options={options}
                    title={"Transacciones"}
                />
               </ThemeProvider>
            </Grid>
        </Grid>
    );
}

export default TablaTransaction;
