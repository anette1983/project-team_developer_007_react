import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import css from './MyRecipesList.module.css';
import { useSelector } from 'react-redux';
import { selectMyRecipes } from 'redux/myRecipes/selectors';

const MyRecipesList = () => {
  const myRecipes = useSelector(selectMyRecipes);
  return (
    <>
      <ul className={css.list}>
        {myRecipes.map(recipe => {
          return <MyRecipesItem key={recipe._id} recipe={recipe} />;
        })}
      </ul>
    </>
  );
};

export default MyRecipesList;
