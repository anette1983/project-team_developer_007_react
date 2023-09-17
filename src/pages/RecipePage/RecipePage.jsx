import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/recipes/selectors';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { fetchRecipeById } from 'redux/recipes/operations';
import { RecipePageTitle } from 'components/Main/RecipePageTitle/RecipePageTitle';
import { RecipeInngredientsList } from 'components/RecipeInngredientsList/RecipeInngredientsList';
import { RecipePreparation } from 'components/Main/RecipePreparation/RecipePreparation';

import css from './RecipePage.module.css';
import LoadingNotice from 'components/LoadingNotice/LoadingNotice';

const RecipePage = () => {
  const { container, content_wrapper } = css;

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  const { recipeId } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchRecipeById(recipeId));
  }, [dispatch, isRefresh, recipeId]);

  return (
    <div className={container}>
      {isLoggedIn && !isRefresh && (
        <>
          {isLoading ? (
            <LoadingNotice />
          ) : (
            <>
              <RecipePageTitle />

              <div className={content_wrapper}>
                <RecipeInngredientsList />
                <RecipePreparation />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default RecipePage;
