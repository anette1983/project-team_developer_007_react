import { useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation/Navigation';
import ThemeToggler from './ThemeToggler';
import UserLogo from './UserProfile/UserLogo';
import css from './header.module.css';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { pathname } = useLocation();
  const isloading = useSelector(selectIsRefreshing);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {isLoggedIn &&
        (!isloading ? (
          <div className={css.header}>
            <Logo />
            <Navigation width={1441} />
            <div className={css.userContainer}>
              <UserLogo />
              <ThemeToggler />
            </div>
          </div>
        ) : (
          <></>
        ))}
    </>
  );
};
export default Header;
