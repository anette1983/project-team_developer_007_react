import { Footer } from 'components/Footer/Footer/Footer';
import Loader from 'components/Loader';
import Header from 'components/header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css'

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className={css.layoutBG}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
