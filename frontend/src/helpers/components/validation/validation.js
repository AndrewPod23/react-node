import React from 'react'; 
import { ErrorMessage } from "react-hook-form";

export const contactValidationSchema = {
  required: 'This field is required',
  maxLength: {
    value: 40,
    message: 'Max length is 40 symbols'
  }
};

export const userValidationSchema = {
    required: `Login or password can't be blank`
};

export const validation = (errors, name) =>  (
  <ErrorMessage errors={errors} name={name}>
    {({ messages }) => {
      return (
        messages && Object.entries(messages).map(([type, message]) => (
          <p key={type}>{message}</p>
        ))
      )
    }}
  </ErrorMessage>
);
