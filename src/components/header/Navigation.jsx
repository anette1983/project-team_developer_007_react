import { NavLink } from 'react-router-dom';
import css from './header.module.css';
import { ReactComponent as Search } from '../../images/header/svg/search/search.svg';

const Navigation = ({ width, closeModal }) => {


  return (
    <nav className={width < 1441 ? css.mobileNav : css.nav}>
      <NavLink
        to="/categories"
        className={navData => (navData.isActive ? css.active : '')}
        onClick={closeModal}
      >
        Categories
      </NavLink>
      <NavLink
        to="/add"
        className={navData => (navData.isActive ? css.active : '')}
        onClick={closeModal}
      >
        Add recipes
      </NavLink>
      <NavLink
        to="/my"
        className={navData => (navData.isActive ? css.active : '')}
        onClick={closeModal}
      >
        My recipes
      </NavLink>
      <NavLink
        to="/favorite"
        className={navData => (navData.isActive ? css.active : '')}
        onClick={closeModal}
      >
        Favorites
      </NavLink>
      <NavLink
        to="/shopping-list"
        className={navData => (navData.isActive ? css.active : '')}
        onClick={closeModal}
      >
        Shopping List
      </NavLink>

      {width < 1441 ? (
        <div className={css.mobileSearchLink}>
          <NavLink to="/search" onClick={closeModal}>
            <Search className={css.mobileSearchSVG} />

            <span>Search</span>
          </NavLink>
        </div>
      ) : (
        <NavLink to="/search" onClick={closeModal}>
          <Search className={css.searchSVG} />
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
