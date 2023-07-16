import { useSelector } from 'react-redux';
import { selectCurrentRecipe } from 'redux/recipes/selectors';

import css from './RecipePageTitle.module.css';

export const RecipePageTitle = () => {
  const { hero, title: CssTitle, subtitle, button, time_prepeare } = css;
  const recipe = useSelector(selectCurrentRecipe);

  return (
    <section className={hero}>
      <h1 className={CssTitle}>{recipe.title}</h1>
      <p className={subtitle}>{recipe.description} </p>
      <button type="button" className={button}>
        Add to favorite recipes
      </button>
      <p className={time_prepeare}>{recipe.time}</p>
    </section>
  );
};
