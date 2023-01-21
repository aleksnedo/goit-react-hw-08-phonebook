import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
export const Number = styled.span`
  color: gray;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background-color: #4d4c4c;
  padding: 5px;
  width: 70px;
  transition: scale 100ms cubic-bezier(0.455, 0.03, 0.515, 0.5);
  &:active {
    scale: 0.9;
  }
`;