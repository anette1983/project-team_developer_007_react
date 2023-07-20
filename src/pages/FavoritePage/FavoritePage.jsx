import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './FavoritePage.module.css';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { selectFavoriteRecipes } from 'redux/favoriteRecipes/selectors';
import { useDispatch, useSelector } from 'react-redux';

import {
  deleteFavoriteRecipi,
  fetchFavoriteRecipes,
} from 'redux/favoriteRecipes/operations';

import searchCss from '../SearchPage/searchContainer.module.css';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';

const FavoritePage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(selectFavoriteRecipes);
  const [data, setData] = useState('');

  const childToParent = data => {
    setData(data);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchFavoriteRecipes());
    if (data !== '') {
      dispatch(deleteFavoriteRecipi(data));
      dispatch(fetchFavoriteRecipes());
    }
  }, [dispatch, data]);

  return (
    <div className={css.wrapper}>
      <SectionTitle text={'Favorites'} />
      <section className={css.favSection}>
        {favoriteRecipes.length !== 0 ? (
          <FavoriteList
            childToParent={childToParent}
            favoriteRecipes={favoriteRecipes}
          ></FavoriteList>
        ) : (
          <div className={css.img_wrapp}>
            <img
              className={searchCss.mobPhoto}
              src={require('../../images/SearchPage/vegetables-5abfb9c60122f5 1.png')}
              alt="vegetables"
            />
            <img
              className={searchCss.tabPhoto}
              src={require('../../images/SearchPage/vegetables-5abfb9c60122f5 1_tab.png')}
              alt="vegetables"
            />
            <h3 className={searchCss.text}>You have no favorite recipes..</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default FavoritePage;
