import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import '../../../scss/utils.scss';


const InputUtils = (props) => {
    return (
        <TextField 
            id="standard-basic"
            label={props.LABEL_INPUT}
            onChange={props.ONCHANGE_INPUT}
            value={props.VALUE_INPUT}
            disabled={props.DISABLED}
           className='imputUtils'
           
        />
    );
};
export default InputUtils;