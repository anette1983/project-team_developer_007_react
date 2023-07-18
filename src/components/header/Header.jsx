import { useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggler from './ThemeToggler';
import UserLogo from './UserProfile/UserLogo';
import css from './header.module.css';
// import globalcss from '../../pages/pages.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader';

// import defaultUserAvatar from '../../pictures/userDefault.png'

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
          <div className={css.header}>
            <Loader />
          </div>
        ))}
    </>
  );
};
export default Header;
