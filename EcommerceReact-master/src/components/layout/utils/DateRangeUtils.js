import * as  React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDateRange } from '../../../actions/ViewProposalAction';
import { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeUtils = ({close}) => {
    const dispatch = useDispatch()
    const [state, setState] = useState([
        {
            startDate: null,
            endDate: null,
            key: "selection"
        }
    ]);

    const cleanDateRange = () => {
        setState([
            {
                startDate: null,
                endDate: null,
                key: "selection"
            }
        ])
        dispatch(setDateRange({'startDate':'','endDate':''}));
        close();
    }
    return (
        <>
            <Grid item xs={12}>
                <DateRange
                    onChange={item => { setState([item.selection]); dispatch(setDateRange(item.selection)) }}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                //format="DD/MM/YYYY"
                />
            </Grid>
            <Grid container item xs={12} justifyContent="flex-end">
                <Button onClick={cleanDateRange}>Clean</Button>
            </Grid>

        </>
    );
}
export default DateRangeUtils;