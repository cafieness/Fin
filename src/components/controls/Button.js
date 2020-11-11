import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    color: 'white',
    fontWeight: '600',
    border: 'transparent',
  },
}));

export default function Button(props) {
  const { text, size, color, variant, className, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || 'contained'}
      size={size || 'large'}
      onClick={onClick}
      className={className}
      {...other}
      classes={{ root: classes.root }}>
      {text}
    </MuiButton>
  );
}
