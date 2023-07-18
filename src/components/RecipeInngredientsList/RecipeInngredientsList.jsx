import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectCurrentRecipe } from 'redux/recipes/selectors';
import RecipeInngredient from 'components/RecipeInngredient/RecipeInngredient';

import css from './RecipeIngredientsList.module.css';

export const RecipeInngredientsList = () => {
  const { wrapper_title_table, section, title_table, title_table_position } =
    css;

  const recipe = useSelector(selectCurrentRecipe);
  const ingredients =
    Object.keys(recipe).length !== 0 ? recipe.ingredients : [];

  return (
    <section className={section}>
      <div className={wrapper_title_table}>
        <p className={title_table}>Ingredients</p>
        <p className={clsx([title_table, title_table_position])}>Number</p>
        <p className={title_table}>Add to list</p>
      </div>

      {ingredients.length !== 0 ? (
        ingredients.map(el => {
          return (
            <li style={{ listStyleType: 'none' }} key={el._id._id}>
              <RecipeInngredient ingredient={el} />
            </li>
          );
        })
      ) : (
        <>No ingredients</>
      )}
    </section>
  );
};
