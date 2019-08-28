/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { TextField, InputAdornment, Box, Button } from '@material-ui/core';
import { Person, Lock, Work } from '@material-ui/icons';

import { FieldsBox, QueryBox, Input } from './styles';

export default class MainFields extends Component {
  render() {
    return (
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <FieldsBox>
          <Input
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

          <Input
            id="password"
            label="Senha"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />

          <Input
            id="project"
            label="Projeto"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Work />
                </InputAdornment>
              ),
            }}
          />

          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              style={{
                borderColor: '#1DB954',
                color: '#1DB954',
                marginRight: '10px',
              }}
            >
              Limpar todos os campos
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: '#1DB954' }}
            >
              Executar Query
            </Button>
          </Box>
        </FieldsBox>

        <QueryBox>
          <Input
            id="query"
            label="Query"
            multiline
            rows={9}
            rowsMax={12}
            fullWidth
            variant="outlined"
          />
        </QueryBox>
      </Box>
    );
  }
}
