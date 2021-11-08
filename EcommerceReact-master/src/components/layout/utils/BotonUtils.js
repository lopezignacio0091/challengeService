import { Button } from '@material-ui/core';
import * as  React from 'react';

const BotonUtils = ({ accion, label, classButton }) => {

  return (
    <Button
      variant="contained"
      className={classButton}
      onClick={accion}
    >
      {label}
    </Button>
  );
}

export default BotonUtils;
