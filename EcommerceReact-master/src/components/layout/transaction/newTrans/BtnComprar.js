import React from 'react'
import {Button} from '@mui/material';
import { useSelector } from 'react-redux';
import _ from 'lodash';

export default function BtnComprar() {
    const { autoSelect, propietario,serviceSelect} = useSelector((state) => state.TransactionReducer);
    const comprar = useSelector((state) => state.TransactionReducer);
    return (
        <>
            <Button  
            disabled={_.isEmpty(autoSelect) || _.isEmpty(propietario) || _.isEmpty(serviceSelect) } 
            onClick={()=>alert("comprando")} className="btnCompra"> Comprar </Button>
        </>
    )
}
