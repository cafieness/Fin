import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

export default function ActionButton(props) {
  const { color, children, onClick } = props;

  return <Button onClick={onClick}>{children}</Button>;
}
