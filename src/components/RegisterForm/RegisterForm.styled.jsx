import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Form = styled.form`
  width: 320px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid gray;
  border-radius: 4px;
  box-shadow: 3px 3px 20px 3px rgba(0, 0, 0, 0.75);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Btn = styled(Button)`
  margin-top: 20px;
`;
