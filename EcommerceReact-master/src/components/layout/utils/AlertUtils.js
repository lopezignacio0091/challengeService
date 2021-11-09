import * as  React from 'react';
import Alert from '@mui/material/Alert';
export default function AlertUtils(props) {
    
    return (
        <>
             <Alert severity={props.TYPE}>{props.LABEL}</Alert>
        </>
    )
}
