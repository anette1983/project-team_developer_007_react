import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { ReactComponent as Search } from '../../../images/header/svg/search/search.svg';

const Navigation = ({ width, closeModal }) => {
  return (
    <nav>
      <ul className={width < 1441 ? css.mobileNav : css.nav}>
        <li>
          <NavLink
            to="/categories"
            className={navData => (navData.isActive ? css.active : '')}
            onClick={closeModal}
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={navData => (navData.isActive ? css.active : '')}
            onClick={closeModal}
          >
            Add recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my"
            className={navData => (navData.isActive ? css.active : '')}
            onClick={closeModal}
          >
            My recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorite"
            className={navData => (navData.isActive ? css.active : '')}
            onClick={closeModal}
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shopping-list"
            className={navData => (navData.isActive ? css.active : '')}
            onClick={()=>closeModal()}
          >
            Shopping List
          </NavLink>
        </li>
        {width < 1441 ? (
          <li className={css.mobileSearchLink}>
            <NavLink
              to="/search"
              onClick={closeModal}
              className={css.smallContainer}
            >
              <Search className={css.mobileSearchSVG} />
              <span>Search</span>
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/search" onClick={closeModal}>
              <Search className={css.searchSVG} />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
