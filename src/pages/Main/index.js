/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { Typography, Container } from '@material-ui/core';
import { Header, Card, BoxHeader } from './styles';

import AgileLogo from '../../assets/images/agile-logo.png';

import MainFields from '../../components/MainFields';

export default class Main extends Component {
  render() {
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
            <MainFields />
          </Card>
        </Container>
      </>
    );
  }
}
