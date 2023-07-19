import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import css from './FavoritePage.module.css';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { selectFavoriteRecipes } from 'redux/favoriteRecipes/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteRecipes } from 'redux/favoriteRecipes/operations';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

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
      <section className={css.favSection}>
        {favoriteRecipes.length !== 0 ? (
          <FavoriteList favoriteRecipes={favoriteRecipes}></FavoriteList>
        ) : (
          <NotFoundPage text="you have no favorite recipes" />
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
