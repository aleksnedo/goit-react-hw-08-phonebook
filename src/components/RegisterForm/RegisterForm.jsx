import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Form, Btn } from './RegisterForm.styled';
import { TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="text"
          name="name"
          label="Username"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
        />
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
          Register
        </Btn>
      </Form>
    </>
  );
};
