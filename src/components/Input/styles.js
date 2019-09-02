import { TextField, withStyles } from '@material-ui/core';

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

export const Field = withStyles(inputStyle)(TextField);
