import React, { Component } from 'react';

import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';

import { CollectionsBookmark } from '@material-ui/icons';
import { Header, Card, BoxHeader } from './styles';

import AgileLogo from '../../assets/images/agile-logo.png';

import MainFields from '../../components/MainFields';
import Modal from '../../components/Modal';
import ResultCard from '../../components/ResultCard';

export default class Main extends Component {
  state = {
    form: {
      user: {
        type: 'text',
        value: '',
      },
      password: {
        type: 'password',
        value: '',
      },
      project: {
        type: 'text',
        value: '',
      },
    },

    user: '',
    password: '',
    project: '',
    areResults: false,
    isDialogOpen: false,
    loading: false,
  };

  handleUserChange = e => {
    this.setState({ user: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleProjectChange = e => {
    this.setState({ project: e.target.value });
  };

  handleClearClick = () => {
    this.setState({
      user: '',
      password: '',
      project: '',
    });
  };

  // renderForm = () => {
  //   for (var key in this.state.form) {
  //     console.log(this.state.form[key].type);
  //   }
  //   // this.state.form.map((input) => {
  //   //   console.log(input);
  //   // });
  // };

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
          {/* {this.renderForm()} */}
          <Card elevation="5">
            <MainFields
              isExecutable={areResults}
              onExecuteClick={this.handleExecuteClick}
              onGoClick={this.handleGoClick}
            />
          </Card>

          <Modal
            isDialogOpen={isDialogOpen}
            onClose={this.handleClose}
            onGoClick={this.handleGoClick}
          />

          <ResultCard areResults={areResults} />
        </Container>
      </>
    );
  }
}
