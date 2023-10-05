import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/AppBar/AppBar';
import { Suspense } from 'react';
import { Container, HeaderStyles } from './Container.styled';

export const Layout = () => {
  return (
    <div>
      <HeaderStyles>
        <AppBar />
      </HeaderStyles>
      <Container>
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </div>
  );
};






