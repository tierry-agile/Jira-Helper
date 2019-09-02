/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { InputAdornment, Box } from '@material-ui/core';
import { Person, Lock, Work } from '@material-ui/icons';

import {
  FieldsBox,
  QueryBox,
  Input,
  OutlinedButton,
  ContainedButton,
} from './styles';

export default class MainFields extends Component {
  render() {
    const { isExecutable, onExecuteClick, onGoClick } = this.props;
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
            <OutlinedButton variant="outlined" color="primary">
              Limpar todos os campos
            </OutlinedButton>

            <ContainedButton
              variant="contained"
              color="primary"
              onClick={onExecuteClick}
            >
              Executar Query
            </ContainedButton>

            <ContainedButton
              variant="contained"
              disabled={!isExecutable}
              onClick={onGoClick}
            >
              Taca-le pau!
            </ContainedButton>
          </Box>
        </FieldsBox>

        <QueryBox>
          <Input
            id="query"
            label="Query"
            multiline
            rows={10}
            rowsMax={12}
            fullWidth
            variant="outlined"
          />
        </QueryBox>
      </Box>
    );
  }
}
