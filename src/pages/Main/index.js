import React, { Component } from 'react';

import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from '@material-ui/core';
import { CollectionsBookmark } from '@material-ui/icons';
import { Header, Card, BoxHeader } from './styles';

import AgileLogo from '../../assets/images/agile-logo.png';

import MainFields from '../../components/MainFields';

export default class Main extends Component {
  state = {
    areResults: false,
    isDialogOpen: false,
    loading: false,
  };

  handleExecuteClick = () => {
    this.setState(prevState => ({
      areResults: !prevState.areResults,
    }));
  };

  handleGoClick = () => {
    this.setState(prevState => ({
      isDialogOpen: !prevState.isDialogOpen,
    }));
  };

  handleClose = () => {
    this.setState({
      isDialogOpen: false,
    });
  };

  render() {
    const { areResults, isDialogOpen } = this.state;
    return (
      <>
        <Header>
          <BoxHeader>
            <Typography variant="h5" align="center">
              Jira Helper
            </Typography>
            <img src={AgileLogo} alt="Agile Content" />
          </BoxHeader>
        </Header>
        <Container>
          <Card elevation="5">
            <MainFields
              isExecutable={areResults}
              onExecuteClick={this.handleExecuteClick}
              onGoClick={this.handleGoClick}
            />
            <Dialog
              open={isDialogOpen}
              onClose={this.handleGoClick}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Têm certeza disso?
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Essa ação será realizada em <b>29</b> itens e não poderá ser
                  revertida!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleGoClick} color="primary">
                  Naaah
                </Button>
                <Button onClick={this.handleGoClick} color="primary" autoFocus>
                  Bora!
                </Button>
              </DialogActions>
            </Dialog>
          </Card>

          <Card elevation="5" style={{ margin: '20px 0px' }}>
            <Typography
              gutterBottom
              variant="h5"
              style={{ borderBottom: '1px solid #ccc' }}
            >
              Resultados:
            </Typography>
            {areResults ? (
              <List dense>
                <ListItem button>
                  <ListItemIcon>
                    <CollectionsBookmark />
                  </ListItemIcon>
                  <ListItemText primary="Single-line item" />
                </ListItem>
              </List>
            ) : (
              <Typography align="center" variant="subtitle1">
                Não há resultados para serem mostrados
              </Typography>
            )}
          </Card>
        </Container>
      </>
    );
  }
}
