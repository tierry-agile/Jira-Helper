import styled from 'styled-components';
import 'typeface-roboto';
import { Box, Paper, withStyles } from '@material-ui/core';

export const Body = styled.div`
  font-family: 'Roboto';
`;

const headerStyle = {
  root: {
    fontFamily: 'Branding',
    padding: '15px',
    border: 'none',
    borderRadius: '0',
    background: '#FFF',
    color: '#000',
    marginBottom: '30px',
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 20px -5px',

    '& img:last-child': {
      width: '180px',
    },
  },
};

export const Header = withStyles(headerStyle)(Paper);

const boxHeaderStyle = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '85%',
    margin: 'auto',
  },
};

export const BoxHeader = withStyles(boxHeaderStyle)(Box);

const paperStyle = theme => ({
  root: {
    padding: theme.spacing(4),
  },
});

export const Card = withStyles(paperStyle)(Paper);
