import React from 'react';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { validation } from '../validation/validation';

const UserRegisterForm = ({ onSubmit, register, errors, watch }) => (
  <form onSubmit={onSubmit} className="container">
    <Input
      name="login"
      placeholder="Login"
      type="text"
      label="Login"
      innerRef={register}
    />
    {validation(errors, "login")}
    <Input
      name="password"
      placeholder="Password"
      type="password"
      label="Password"
      innerRef={register}
    />
    {validation(errors, "password")}
    <Input
      name="confirmPassword"
      placeholder="Confirm password"
      type="password"
      label="Confirm Password"
      innerRef={register({
        validate: val => { return val === watch('password') || `The passwords doesnt match` }
      })}
    />
    {validation(errors, "confirmPassword")}
    <Input
      name="mail"
      placeholder="Email"
      type="text"
      label="Email"
      innerRef={register}
    />
    {validation(errors, "mail")}
    <button type="submit" className="btn btn-primary mt-3">Register</button>
    <Link to="/" className="btn btn-danger mt-3 ml-3">Back</Link>
  </form>

);

export default UserRegisterForm;