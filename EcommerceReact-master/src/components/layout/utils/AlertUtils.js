import * as  React from 'react';
import Alert from '@material-ui/lab/Alert';
import '../../../scss/utils.scss';
export default function AlertUtils(props) {
    
    return (
        <>
             <Alert severity={props.TYPE} className={props.CLASS}>{props.LABEL}</Alert>
        </>
    )
}
