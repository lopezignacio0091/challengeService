import *  as  React from 'react'
import { Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

 const  PaginationUtils =({noOfPages,page,handleChange}) => {
    return (
        <Grid style={{'marginTop':'20px'}}>
             <Pagination
                count={noOfPages}
                color="primary"
                variant="outlined"
                page={page}
                onChange={handleChange}
                size="small"
                showFirstButton
                showLastButton
                shape="rounded"
            />
        </Grid>
    )
};
export default PaginationUtils;