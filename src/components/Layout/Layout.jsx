import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { AppBar } from '../AppBar/AppBar';
import { Container } from './Layout.styled';

export const Layout = () => {
  const ToastOptions = {
    duration: 4000,
    error: {
      style: {
        border: '3px solid #1976d2',
      },
    },
  };

  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={ToastOptions}
      />
    </Container>
  );
};
