import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <div className={css.AuthNav__wrap}>
        <Link className={css.AuthNav__button} to="/register">
          Registration
        </Link>
        <Link className={css.AuthNav__button} to="/signin">
          Sign In
        </Link>
      </div>
    </>
  );
};

export default AuthNav;
