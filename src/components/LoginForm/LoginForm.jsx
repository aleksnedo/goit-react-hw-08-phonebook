import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectLoginError } from 'redux/auth/selectors';

import { Form, Btn, AlertStyle } from './LoginForm.styled';
import { TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectLoginError);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
        />

        <Btn type="submit" variant="contained" fullWidth>
          Log In
        </Btn>
      </Form>
      {error && (
        <AlertStyle variant="outlined" severity="error">
          Something wrong: Check your password and email or may be you are not
          registered user.
        </AlertStyle>
      )}
    </>
  );
};
