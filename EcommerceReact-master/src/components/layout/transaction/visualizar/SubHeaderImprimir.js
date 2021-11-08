import React, { Fragment } from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { Grid, IconButton } from '@material-ui/core';

const SubHeaderImprimir = () => {
    return (
        <Fragment>
            <Grid item container justify="flex-end" xs={12} className='visualizarImprimir'>
                <IconButton aria-label="print" size="small" onClick={() => window.print()}>
                    <LocalPrintshopIcon />
                </IconButton>
            </Grid>
        </Fragment>
    );
}

export default SubHeaderImprimir;
