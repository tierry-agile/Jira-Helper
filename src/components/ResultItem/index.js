import React, { Component } from 'react';

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { CollectionsBookmark } from '@material-ui/icons';

// import { Container } from './styles';

export default class ResultItem extends Component {
  render() {
    const { text } = this.props;

    return (
      <ListItem button>
        <ListItemIcon>
          <CollectionsBookmark />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  }
}
