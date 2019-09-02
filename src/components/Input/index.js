import React, { Component } from 'react';

import { InputAdornment } from '@material-ui/core';
import { Person } from '@material-ui/icons';

import { Field } from './styles';

export default class Input extends Component {
  render() {
    return (
      <Field
        id="user"
        label="Usuário"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person />
            </InputAdornment>
          ),
        }}
      />
    );
  }
}
