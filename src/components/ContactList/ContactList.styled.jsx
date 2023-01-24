import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 1px solid gray;
  border-radius: 4px;
  box-shadow: 3px 3px 20px 3px rgba(0, 0, 0, 0.75);
  width: 500px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
export const Number = styled.span`
  color: #1976d2;
`;

export const Btn = styled(Button)`
  font-size: 12px;
  width: 70px;
`;
