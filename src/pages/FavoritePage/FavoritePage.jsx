import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import css from '../pages.module.css';
import searchCss from '../ShoppingListPage/shopingContainer.module.css';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { selectFavoriteRecipes } from 'redux/favoriteRecipes/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteRecipes } from 'redux/favoriteRecipes/operations';

const FavoritePage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(selectFavoriteRecipes);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchFavoriteRecipes());
  }, [dispatch]);

  return (
    <>
      <section className={`${css.container} ${searchCss.container}`}>
        <MainPageTitle text="Favorites" />
      </section>
      <section>
        <FavoriteList favoriteRecipes={favoriteRecipes}></FavoriteList>
      </section>
    </>
  );
};

export default FavoritePage;
