import styled from '@emotion/styled';
import { Button, Alert } from '@mui/material';

export const Form = styled.form`
  width: 320px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #1976d2;
  border-radius: 4px;
  box-shadow: 3px 3px 20px 10px #1976d275;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Btn = styled(Button)`
  margin-top: 20px;
`;

export const AlertStyle = styled(Alert)`
  margin-top: 20px;
`;
