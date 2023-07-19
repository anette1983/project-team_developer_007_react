import { useSelector } from 'react-redux';

import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import css from '../../pages/pages.module.css';
import myRecipesCss from './MyRecipesPage.module.css';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import {
  selectMyRecipes,
  selectMyRecipesError,
  selectMyRecipesIsLoading,
} from 'redux/myRecipes/selectors';
import { useEffect } from 'react';
import searchCss from '../SearchPage/searchContainer.module.css';
import Paginator from 'components/MyRecipesPagination/Paginator';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const MyRecipesPage = () => {
  const isLoading = useSelector(selectMyRecipesIsLoading);
  const error = useSelector(selectMyRecipesError);
  const myRecipes = useSelector(selectMyRecipes);
  const text = 'My recipes';

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={css.section}>
        {isLoading && !error && <Loader />}

        <div className={`${css.container} ${searchCss.container}`}>
          <MainPageTitle text={text} />
        </div>

        <div className={`${css.container} ${myRecipesCss.wrapper} `}>
          {!myRecipes && <NotFoundPage text="you have no personal recipes" />}
          <MyRecipesList />
        </div>
        <div
          className={`${myRecipesCss.container} ${myRecipesCss.pagin_container}`}
        >
          <Paginator />
        </div>
      </div>
    </>
  );
};

export default MyRecipesPage;
