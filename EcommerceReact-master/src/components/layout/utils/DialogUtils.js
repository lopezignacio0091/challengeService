import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
import { Action } from "redux";




export default function DialogoGeneral({ open, cerrar, contenido }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={cerrar}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>{contenido}</DialogContent>
      </Dialog>
    </div>
  );
}
