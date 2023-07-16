import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading } from 'redux/recipes/selectors';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { fetchRecipeById } from 'redux/recipes/operations';
import { RecipePageTitle } from 'components/Main/RecipePageTitle/RecipePageTitle';
import { RecipeInngredientsList } from 'components/RecipeInngredientsList/RecipeInngredientsList';
import { RecipePreparation } from 'components/Main/RecipePreparation/RecipePreparation';

import css from './RecipePage.module.css';

const RecipePage = () => {
  const { container } = css;

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(fetchRecipeById(recipeId));
  }, [dispatch, isRefresh, recipeId]);

  return (
    <div className={container}>
      {isLoggedIn && !isRefresh && (
        <>
          {isLoading ? (
            <h3>Request in progress...</h3>
          ) : (
            <>
              <RecipePageTitle />

              <RecipeInngredientsList />
              <RecipePreparation />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default RecipePage;
