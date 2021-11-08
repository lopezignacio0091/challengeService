import * as React from 'react';
import { Fragment } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Button } from '@material-ui/core';
import '../../../scss/utils.scss';

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
        className="mensajeOk"
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