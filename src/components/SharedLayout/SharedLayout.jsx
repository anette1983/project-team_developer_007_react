import { Footer } from 'components/Footer/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <div>Header</div>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer/>
      {/* <div>Footer</div> */}
    </>
  );
};

export default SharedLayout;
