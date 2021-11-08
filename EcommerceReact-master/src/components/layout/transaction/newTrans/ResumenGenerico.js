import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import _ from "lodash";
import '../../../../scss/transaction.scss';
const ResumenGenerico = ({ labelHeader1, labelHeader2, montoheader1, montoheader2 }) => {


    return (
        <Grid container direction="row" elevation={3} className="rootResumen">
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <label className="labelResumen">Resumen</label>
            </Grid>

            <Divider className="divider"></Divider>

            <Grid item xs={12} sm={12} md={12} lg={12}>

                <label className="text" >
                    {labelHeader1}
                </label>

                <Typography variant="h6" className="number">
                    {_.toNumber(montoheader1).toLocaleString("it-IT", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                    })} ARS
                </Typography>

            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
                <label className="text">
                    {labelHeader2}
                </label>
                <Typography variant="h6" className="number" >
                    {_.toNumber(500).toLocaleString("it-IT", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                    })} ARS
                </Typography>
            </Grid>
            <Divider className="divider"></Divider>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <label className="text">
                    Total
                </label>
                <Typography variant="h6" className="number">
                    {_.toNumber(montoheader2).toLocaleString("it-IT", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                    })} ARS
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ResumenGenerico;
