import React from 'react';
import { Field } from './styles';

export const FieldCheckout = ({ label, id, name, placeholder, maxLength }) => {
  return (
    <Field>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        required
      />
    </Field>
  );
};
