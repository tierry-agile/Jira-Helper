import { Box, TextField, Button, withStyles } from '@material-ui/core';

const boxStyle = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',

    '& label': {
      fontSize: '18px',
    },

    '& div:not(:first-child)': {
      marginTop: '20px',
    },
  },
};

export const FieldsBox = withStyles(boxStyle)(Box);

const queryStyle = {
  root: {
    width: '60%',
    marginLeft: '40px',
  },
};

export const QueryBox = withStyles(queryStyle)(Box);

const inputStyle = {
  root: {
    '& .Mui-focused': {
      color: '#1DB954',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: '#1DB954',
    },

    '& .MuiOutlinedInput-root': {
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#1DB954',
        },
      },
    },
  },
};

export const Input = withStyles(inputStyle)(TextField);

const outlinedButtonStyle = {
  root: {
    borderColor: '#1DB954',
    color: '#1DB954',
    marginRight: '10px',

    '&:hover': {
      borderColor: 'inherit',
    },
  },
};

export const OutlinedButton = withStyles(outlinedButtonStyle)(Button);

const containedButtonStyle = {
  root: {
    backgroundColor: '#1DB954',
    color: '#FFF',

    '&:hover': {
      backgroundColor: '#1DB954',
    },

    '&:last-child': {
      marginLeft: '10px',
    },
  },
};

export const ContainedButton = withStyles(containedButtonStyle)(Button);
