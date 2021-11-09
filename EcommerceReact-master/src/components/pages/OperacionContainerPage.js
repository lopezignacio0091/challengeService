import * as React from 'react';
import { Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {viewTransaction,setLoading} from '../../actions/OperacionActions';
import {clear} from '../../actions/TransactionAction';
import BodyOperacion from '../layout/transaction/visualizar/BodyVisualizarCompra';
import Progress from '../layout/progress/Progress';
import '../../scss/operacion.scss';

const OperacionPage = ({ match }) => {
    const { id } = match.params
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.OperacionReducer);
    useEffect(() => {
        dispatch(setLoading())
        dispatch(viewTransaction(id));
        return () => {dispatch(clear())}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <Progress />
    return (
        <Grid container direction="row" className="operacionContainer">
            <Grid container item xs={12} sm={12} md={12} lg={12} className="containerTabla">
                <BodyOperacion />
            </Grid>
        </Grid>
    )
}
export default OperacionPage;