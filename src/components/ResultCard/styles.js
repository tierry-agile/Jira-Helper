import { Paper, Typography, withStyles } from '@material-ui/core';

const paperStyle = theme => ({
  root: {
    padding: theme.spacing(4),
    margin: '20px 0px',
  },
});

export const Card = withStyles(paperStyle)(Paper);

const titleCard = {
  root: {
    borderBottom: '1px solid #ccc',
  },
};

export const TitleCard = withStyles(titleCard)(Typography);
