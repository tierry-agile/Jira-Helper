import { Box, TextField, withStyles } from '@material-ui/core';

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
      color: 'green',
      borderColor: 'red',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },

    '& .MuiOutlinedInput-root': {
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          color: '#1DB954',
          borderColor: '#1DB954',
        },
      },
    },
  },
};

export const Input = withStyles(inputStyle)(TextField);
