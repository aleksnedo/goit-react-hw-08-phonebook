import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 1px solid gray;
  border-radius: 4px;
  box-shadow: 3px 3px 20px 10px #1976d275;
  width: 340px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TextFieldStyle = styled(TextField)`
  width: 300px;
`;
