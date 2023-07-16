import { useSelector } from 'react-redux';
import { selectCurrentRecipe } from 'redux/recipes/selectors';

export const RecipePreparation = () => {
  const recipe = useSelector(selectCurrentRecipe);

  return (
    <section>
      <h2>Recipe Preparation</h2>
      <ol>
        {recipe.instructions.split('.').map(el => {
          return <li>{el}</li>;
        })}
      </ol>
      <img src={recipe.preview} alt={recipe.title} />
    </section>
  );
};
