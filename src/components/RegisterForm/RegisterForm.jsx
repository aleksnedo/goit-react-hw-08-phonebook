import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Form, Label } from './RegisterForm.styled';

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
        <Label>
          Username
          <input type="text" name="name" />
        </Label>
        <Label>
          Email
          <input type="email" name="email" />
        </Label>
        <Label>
          Password
          <input type="password" name="password" />
        </Label>
        <button type="submit">Register</button>
      </Form>
    </>
  );
};
