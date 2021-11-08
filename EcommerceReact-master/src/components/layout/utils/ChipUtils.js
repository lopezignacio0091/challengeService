import * as React from 'react'
import Chip from '@material-ui/core/Chip';
import '../../../scss/utils.scss';
const ChipUtils = (props) =>{
    return(
        <Chip label={props.LABEL} className={props.CLASS} variant="outlined"/>
    )
}
export default ChipUtils;