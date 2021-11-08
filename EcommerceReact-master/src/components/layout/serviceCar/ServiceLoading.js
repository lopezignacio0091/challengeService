import React from 'react';
import { Grid } from '@mui/material';
import MovieItemLoading from './ServiceItemLoading';

const MovieLoading = () => {
    return (
        <Grid container spacing={3}>
            {Array.from(new Array(6)).map((elem, index) => (
                <Grid item xs={4} key={index}>
                    <MovieItemLoading />
                </Grid>
            ))
            }
        </Grid>
    )
}

export default MovieLoading;
