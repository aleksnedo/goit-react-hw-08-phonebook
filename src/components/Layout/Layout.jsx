import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from '../AppBar/AppBar';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
