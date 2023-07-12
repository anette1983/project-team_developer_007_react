import { useDispatch, useSelector } from 'react-redux';

import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import css from '../../pages/pages.module.css';
import myRecipesCss from './MyRecipesPage.module.css';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import { selectToken } from 'redux/auth/selectors';
import {
  selectMyRecipesError,
  selectMyRecipesIsLoading,
} from 'redux/myRecipes/selectors';
import { useEffect } from 'react';
import { fetchMyRecipes } from 'redux/myRecipes/operations';
import searchCss from '../SearchPage/searchContainer.module.css';

const MyRecipesPage = () => {
  const isLoading = useSelector(selectMyRecipesIsLoading);
  const error = useSelector(selectMyRecipesError);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchMyRecipes());
    }
  }, [dispatch, token]);
  const text = 'My recipes';
  return (
    <>
      <div className={`${myRecipesCss.wrapper_leaf}`}>
        <div className={css.section}>
          <div className={`${css.container} ${searchCss.container}`}>
            <MainPageTitle text={text} />
          </div>
          {isLoading && !error && <h3>Request in progress...</h3>}
          {error && <p>{error}</p>}

          <div className={`${css.container} ${myRecipesCss.wrapper}`}>
            <MyRecipesList />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRecipesPage;
