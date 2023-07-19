import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ReactComponent as Clock } from '../../../images/footer/clock.svg';
import { selectCurrentRecipe } from 'redux/recipes/selectors';
import { selectFavoriteRecipes } from 'redux/favoriteRecipes/selectors';
import {
  addFavoriteRecipi,
  deleteFavoriteRecipi,
  fetchFavoriteRecipes,
} from 'redux/favoriteRecipes/operations';

import css from './RecipePageTitle.module.css';

export const RecipePageTitle = () => {
  const { hero, title: CssTitle, subtitle, button, time_prepeare, icon } = css;
  const recipe = useSelector(selectCurrentRecipe);
  const favoriteRecipes = useSelector(selectFavoriteRecipes);

  const [isInFavorite, setIsInFavorite] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteRecipes());
  }, [dispatch, recipe, isInFavorite]);

  useEffect(() => {
    favoriteRecipes.find(el => el._id === recipe._id)
      ? setIsInFavorite(true)
      : setIsInFavorite(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    if (isInFavorite) {
      dispatch(deleteFavoriteRecipi(recipe._id));
      setIsInFavorite(false);
    } else {
      dispatch(addFavoriteRecipi(recipe._id));
      setIsInFavorite(true);
    }
  };

  return (
    <section className={hero}>
      <h1 className={CssTitle}>{recipe.title}</h1>
      <p className={subtitle}>{recipe.description} </p>
      <button type="button" onClick={handleClick} className={button}>
        {isInFavorite ? 'Remove from favorite' : 'Add to favorite recipes'}
      </button>
      <p className={time_prepeare}>
        <Clock className={icon} />
        <span>{recipe.time}</span>
      </p>
    </section>
  );
};
