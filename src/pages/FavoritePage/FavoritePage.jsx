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
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';


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

      <section className={css.container}>
        <MainPageTitle text="Favorites" />
      </section>

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

// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// // import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
// import css from './FavoritePage.module.css';
// import FavoriteList from 'components/FavoriteList/FavoriteList';
// import { selectFavoriteRecipes } from 'redux/favoriteRecipes/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchFavoriteRecipes } from 'redux/favoriteRecipes/operations';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

// const FavoritePage = () => {
//   const { pathname } = useLocation();
//   const dispatch = useDispatch();
//   const favoriteRecipes = useSelector(selectFavoriteRecipes);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   useEffect(() => {
//     dispatch(fetchFavoriteRecipes());
//   }, [dispatch]);

//   return (
//     <div className={css.wrapper}>
//       {favoriteRecipes?.length === 0 ? (
//         <h1>No favorite recipes</h1>
//       ) : (
//         <>
//           <section className={css.favSection}>
//             {favoriteRecipes && (
//               <NotFoundPage text="you have no personal recipes" />
//             )}
//             <FavoriteList favoriteRecipes={favoriteRecipes}></FavoriteList>
//           </section>
//         </>
//       )}
//     </div>
//   );
// };

// export default FavoritePage;
