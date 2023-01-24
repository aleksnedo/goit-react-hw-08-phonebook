import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { AppBar } from '../AppBar/AppBar';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          error: {
            style: {
              border: '1px solid black',
            },
          },
        }}
      />
    </Container>
  );
};
