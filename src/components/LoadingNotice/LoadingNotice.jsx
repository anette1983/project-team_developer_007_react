import React from 'react';
import Loader from '../Loader';
import css from './LoadingNotice.module.css';

const LoadingNotice = () => {
  return (
    <div className={css.wrapper}>
      <Loader />
      <p className={css.text}>The database is loading...</p>
      <p className={css.text}>
        It may take up to 30 seconds to retrieve data from the database for the
        first time. We apologize for any inconveniences.
      </p>
    </div>
  );
};

export default LoadingNotice;
