import React from 'react';
import { TextField } from '@material-ui/core';

export default function TextArea(props) {
  const { name, label, value, onChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      multiline
    />
  );
}
