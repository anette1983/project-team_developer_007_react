import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import css from './FavoritePage.module.css';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { selectFavoriteRecipes } from 'redux/favoriteRecipes/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFavoriteRecipes } from 'redux/favoriteRecipes/operations';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import NoRecipesPlug from 'pages/MyRecipesPage/NoRecipesPlug';

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
    <div className={css.wrapper}>
      <SectionTitle text={'Favorites'} />

      <section className={css.favSection}>
        {favoriteRecipes.length !== 0 ? (
          <FavoriteList favoriteRecipes={favoriteRecipes}></FavoriteList>
        ) : (
          <NoRecipesPlug text="you have no favorite recipes..." />
        )}
      </section>
    </div>
  );
};

export default FavoritePage;
