import React, { Component } from 'react';

import { Typography, List } from '@material-ui/core';

import { CollectionsBookmark } from '@material-ui/icons';

import ResultItem from '../ResultItem';

import { Card, TitleCard } from './styles';

export default class ResultCard extends Component {
  render() {
    const { areResults } = this.props;

    return (
      <Card elevation="5">
        <TitleCard gutterBottom variant="h5">
          Resultados:
        </TitleCard>
        {areResults ? (
          <List dense>
            <ResultItem text="Single-line item" />
          </List>
        ) : (
          <Typography align="center" variant="subtitle1">
            Não há resultados para serem mostrados
          </Typography>
        )}
      </Card>
    );
  }
}
