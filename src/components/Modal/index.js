import React, { Component } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from '@material-ui/core';

// import { Container } from './styles';

export default class Modal extends Component {
  render() {
    const { isDialogOpen, onClose, onGoClick } = this.props;

    return (
      <Dialog
        open={isDialogOpen}
        onClose={this.handleGoClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Têm certeza disso?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Essa ação será realizada em <b>29</b> itens e não poderá ser
            revertida!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Naaah
          </Button>
          <Button onClick={onClose} color="primary" autoFocus>
            Bora!
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
