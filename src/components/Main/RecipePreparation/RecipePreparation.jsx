import { useSelector } from 'react-redux';
import { selectCurrentRecipe } from 'redux/recipes/selectors';

import css from './RecipePreparation.module.css';

export const RecipePreparation = () => {
  const { title } = css;

  const recipe = useSelector(selectCurrentRecipe);
  const instructionArr =
    Object.keys(recipe).length !== 0 ? recipe.instructions.split('.') : [];
  return (
    <section>
      <h2 className={title}>Recipe Preparation</h2>

      {instructionArr.length !== 0 ? (
        <ol>
          {instructionArr.map((el, i) => {
            return <li key={i}>{el}</li>;
          })}
        </ol>
      ) : (
        <p>No instructions</p>
      )}
      <img src={recipe.preview} alt={recipe.title} />
    </section>
  );
};
