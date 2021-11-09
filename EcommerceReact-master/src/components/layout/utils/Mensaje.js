import * as React from 'react';
import { Fragment } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Button } from '@mui/material';
import '../../../scss/utils.scss'

export default function Mensaje({ open, cerrarMsj, mensaje }) {

  const cerrar = (
    <Button size="small"  onClick={cerrarMsj}>
      Cerrar
    </Button>
  );

  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        className='mensaje'
        open={open}
        onClose={cerrarMsj}
        message={mensaje}
        action={
          cerrar
        }
      />
    </Fragment>
  );
}