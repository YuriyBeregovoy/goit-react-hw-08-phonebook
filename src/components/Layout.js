import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../components/AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};







// import styled from "styled-components";


// export const Layout = styled.div`

//   width: 100%;
//   max-width: 428px;
//   padding-left: 15px;
//   padding-right: 15px;
//   margin-right: auto;
//   margin-left: auto;
//  display: flex;
//   flex-direction:column;
//   align-items: center;
//   padding-top: 40px;
//   padding-bottom: 40px;
// `;