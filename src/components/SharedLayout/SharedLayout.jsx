import { Footer } from 'components/Footer/Footer/Footer';
import Header from 'components/header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {/* <div>Footer</div> */}
    </>
  );
};

export default SharedLayout;
