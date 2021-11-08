import React from 'react';
import {setPropietario,setServicio} from '../../../../actions/TransactionAction';
import { FormControl, Select, InputLabel,MenuItem,Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const PropietarioSeccion = () => {
    const dispatch = useDispatch();
    const { usuarios,propietario,servicios,serviceSelect } = useSelector((state) => state.TransactionReducer);


    const handleChangePropietario =(name,value)=>{
        dispatch(setPropietario(name,value))
    }

    const handleChangeService =(name,value)=>{
        dispatch(setServicio(name,value))
    }


    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>  
            <InputLabel id="inputLabel0-label" className='label'>Propietario</InputLabel>
            <FormControl variant="outlined" style={{ 'width': '100%' }}>
                <Select
                    name="propietario"
                    variant="outlined"
                    value={propietario.name}
                    onChange={(e) => {
                        handleChangePropietario(e.target.name,e.target.value);
                    }}
                >
                    {usuarios.length > 0 &&
                        usuarios.map((item, index) => (
                            (item.name !== "admin") &&
                            <MenuItem key={index} value={item}>{item.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl> 
            </Grid>
            <Grid item xs={4}>  
            <InputLabel id="inputLabel0-label" className='label'>Tipo de Servicio</InputLabel>
            <FormControl variant="outlined" style={{ 'width': '100%' }}>
                <Select
                    name="serviceSelect"
                    variant="outlined"
                    value={serviceSelect.type}
                    onChange={(e) => {
                        handleChangeService( e.target.name,e.target.value);
                    }}
                >
                    {servicios.length > 0 &&
                        servicios.map((item, index) => (
                            <MenuItem key={index} value={item}>{item.type}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl> 
            </Grid>
        </Grid>
    )
}

export default PropietarioSeccion;