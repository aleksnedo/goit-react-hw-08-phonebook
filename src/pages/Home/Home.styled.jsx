import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Banner = styled.h1`
  font-weight: 600;
  font-size: 50;
  margin-bottom: 20px;
  text-shadow: 5px 3px 5px rgba(0, 0, 0, 0.75);
`;
