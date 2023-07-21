import { useSelector } from 'react-redux';
import css from '../../pages/pages.module.css';
import myRecipesCss from './MyRecipesPage.module.css';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import {
  selectMyRecipes,
  selectMyRecipesError,
  selectMyRecipesIsLoading,
} from 'redux/myRecipes/selectors';
import { useEffect } from 'react';

import Paginator from 'components/MyRecipesPagination/Paginator';
import { useLocation } from 'react-router-dom';

import Loader from 'components/Loader';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import NoRecipesPlug from './NoRecipesPlug';


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
        <SectionTitle text={text} />
        <div className={`${css.container} ${myRecipesCss.wrapper} `}>
          {myRecipes.length !== 0 ? (
            <MyRecipesList />
          ) : (
            <NoRecipesPlug text="you have no personal recipes" />
          )}

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
