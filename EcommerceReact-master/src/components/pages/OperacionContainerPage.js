import * as React from 'react';
import { Grid } from '@material-ui/core';
import BodyOperacion from '../layout/transaction/visualizar/BodyVisualizarCompra';
import '../../scss/operacion.scss';

const OperacionPage = () => {
    return (
        <Grid container direction="row">
            <Grid container item xs={12} sm={12} md={12} lg={12} className="containerTabla">
                <BodyOperacion />
            </Grid>
        </Grid>
    )
}
export default OperacionPage;