import React from 'react'
import Button from '@mui/material/Button';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import { useHistory } from "react-router-dom";
export default function CustomToolBar() {
    let history = useHistory();
    return (
        <>
            <Button variant="outlined" startIcon={<CarRepairIcon />} onClick={()=>history.push("/app/common/NewTransaction")}>
                Nuevo Service
            </Button>
        </>
    )
}
