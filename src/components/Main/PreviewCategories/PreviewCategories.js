import { RecipeList } from '../RecipeList/RecipesList';
import { Link } from 'react-router-dom';
import css from './PreviewCategories.module.css';
import { useSelector } from 'react-redux';
import { selectRecipes } from 'redux/recipes/selectors';

export const PreviewCategories = () => {
  const recipes = useSelector(selectRecipes);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {recipes?.map(recipe => {
          return (
            <li className={css.list_item} key={recipe[0]?._id}>
               <h2 className={css.title}>{recipe[0]?.category}</h2>
                <RecipeList data={recipe} />
                <Link to={`/categories/${recipe[0]?.category}`}>
                  <button className={css.btn} type="button">
                    See all
                  </button>
                </Link>
              </li>
          );
        })}
      </ul>

   
      <Link className={css.btn_other} to="/categories">
        Other categories
      </Link>
    </div>
  );
};
