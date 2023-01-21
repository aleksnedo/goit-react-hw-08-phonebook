import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;
  border: 2px solid gray;
  border-radius: 5px;
  box-shadow: 3px 3px 30px 3px rgba(0, 0, 0, 0.75);
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export const Input = styled(Field)`
  height: 20px;
  width: 200px;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px;
  width: 150px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background-color: #4d4c4c;
  transition: scale 100ms cubic-bezier(0.455, 0.03, 0.515, 0.5);
  &:active {
    scale: 0.95;
  }
`;
