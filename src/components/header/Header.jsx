import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggler from './ThemeToggler';
import UserLogo from './UserProfile/UserLogo';
import css from './header.module.css';
import globalcss from '../../pages/pages.module.css';

// import defaultUserAvatar from '../../pictures/userDefault.png'

const Header = () => {
  return (
    <div className={`${css.header} ${globalcss.container}`}>
      <Logo />
      <Navigation width={1441} />
      <UserLogo />

      <ThemeToggler />

    </div>
  );
};
export default Header;
