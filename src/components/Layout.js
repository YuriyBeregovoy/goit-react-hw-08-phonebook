import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/AppBar/AppBar';
import { Suspense } from 'react';
import { HeaderStyles } from './Container.styled';

export const Layout = () => {
  return (
    <div>
      <HeaderStyles><AppBar /></HeaderStyles>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};






