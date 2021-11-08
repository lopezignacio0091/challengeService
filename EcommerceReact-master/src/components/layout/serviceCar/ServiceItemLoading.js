import { Skeleton } from '@mui/material'
import React, { Fragment } from 'react';

const ProductItemLoading = () => {
    return (
        <Fragment>
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            <Skeleton animation="wave" height={25} width="30%" style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="30%" />
        </Fragment>
    )
}

export default ProductItemLoading;
