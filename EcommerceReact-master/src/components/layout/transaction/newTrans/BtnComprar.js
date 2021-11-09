import React from 'react'
import {Button} from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { comprar } from '../../../../actions/TransactionAction';
import _ from 'lodash';

export default function BtnComprar() {
    const dispatch = useDispatch();
    const { autoSelect, propietario,serviceSelect} = useSelector((state) => state.TransactionReducer);
    const dataCompra = useSelector((state) => state.TransactionReducer);
    return (
        <>
            <Button className="btnCompra" 
            disabled={_.isEmpty(autoSelect) || _.isEmpty(propietario) || _.isEmpty(serviceSelect) } 
            onClick={()=>{dispatch(comprar(dataCompra))}} className="btnCompra"> Comprar </Button>
        </>
    )
}
