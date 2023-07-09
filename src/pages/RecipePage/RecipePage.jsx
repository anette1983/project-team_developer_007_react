import { useParams } from 'react-router-dom';
import css from './RecipePage.module.css';
import RecipeInngredient from 'components/RecipeInngredient/RecipeInngredient';
import { clsx } from 'clsx';

const RecipePage = () => {
  const {
    container,
    hero,
    title,
    subtitle,
    button,
    time_prepeare,
    wrapper_title_table,
    section,
    title_table,
    title_table_position,
    // wrapper_title_position,
  } = css;
  const { recipeId } = useParams();
  return (
    <div className={container}>
      <section className={hero}>
        <h1 className={title}>Salmon Avocado Salad</h1>
        <p className={subtitle}>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </p>
        <button type="button" className={button}>
          Add to favorite recipes
        </button>
        <p className={time_prepeare}>20 min</p>
      </section>

      <section className={section}>
        <div className={wrapper_title_table}>
          <p className={title_table}>Ingredients</p>
          <p className={clsx([title_table, title_table_position])}>Number</p>
          <p className={title_table}>Add to list</p>
        </div>
        {/* <div className={wrapper_title_table}>
          <p className={title_table}>Ingredients</p>
          <div className={wrapper_title_position}>
            <p className={title_table}>Number</p>
            <p className={title_table}>Add to list</p>
          </div>
        </div> */}
        <RecipeInngredient />
      </section>
      <h2>{recipeId}</h2>
    </div>
  );
};

export default RecipePage;
