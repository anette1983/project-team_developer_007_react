import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggler from './ThemeToggler';
import UserLogo from './UserProfile/UserLogo';
import css from './header.module.css';
import globalcss from '../../pages/pages.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

// import defaultUserAvatar from '../../pictures/userDefault.png'

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    isLoggedIn && (
      <div className={`${css.header} ${globalcss.container}`}>
        <Logo />
        <Navigation width={1441} />
        <div className={css.userContainer}>
          <UserLogo />
          <ThemeToggler />
        </div>
      </div>
    )
  );
};
export default Header;
