import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';

// import { selectMyRecipes } from 'redux/myRecipes/selectors';
import recipesFromServer from '../../recipes.json';
import css from './MyRecipesList.module.css';

const MyRecipesList = () => {
  // const myRecipes2 = useSelector(selectMyRecipes);
  return (
    <>
      <ul className={css.list}>
        {recipesFromServer.map(recipe => {
          return <MyRecipesItem key={recipe._id} recipe={recipe} />;
        })}
      </ul>
    </>
  );
};

export default MyRecipesList;
