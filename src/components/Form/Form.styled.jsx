import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { Button } from '@mui/material';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;
  border: 1px solid #1976d2;
  border-radius: 4px;
  box-shadow: 3px 3px 20px 10px #1976d275;
  margin-bottom: 15px;
  width: 340px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled(Field)`
  width: 300px;
`;

export const ButtonAdd = styled(Button)`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 300px;
`;
