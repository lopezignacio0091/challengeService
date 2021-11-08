import React from 'react';
import {setAuto} from '../../../../actions/TransactionAction';
import { FormControl, Select, InputLabel,MenuItem,Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const PropietarioSeccion = () => {
    const dispatch = useDispatch();
    const { autosUser,autoSelect } = useSelector((state) => state.TransactionReducer);


    const handleChangePropietario =(name,value)=>{
        dispatch(setAuto(name,value))
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>  
            <InputLabel id="inputLabel0-label" className='label'>Propietario</InputLabel>
            <FormControl variant="outlined" style={{ 'width': '100%' }}>
                <Select
                    name="autoSelect"
                    variant="outlined"
                    value={autoSelect.name}
                    onChange={(e) => {
                        handleChangePropietario(e.target.name,e.target.value);
                    }}
                >
                    {autosUser.length > 0 &&
                        autosUser.map((item, index) => (
                            (item.name !== "admin") &&
                            <MenuItem key={index} value={item}>{item.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl> 
            </Grid>
        </Grid>
    )
}

export default PropietarioSeccion;