import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import css from './MyRecipesList.module.css';
import { useSelector } from 'react-redux';
import {
  selectMyRecipes,
  // selectTotalMyRecipes,
} from 'redux/myRecipes/selectors';
// import { useSelector } from 'react-redux';
// import { selectMyRecipes } from 'redux/myRecipes/selectors';
// import myRecipes from '../../recipes-copy.json';

const MyRecipesList = () => {
  const myRecipes = useSelector(selectMyRecipes);
  console.log(myRecipes);

  // const myRecipes = useSelector(selectMyRecipes);
  return (
    <>
      <ul className={css.list}>
        {myRecipes?.map(recipe => {
          return <MyRecipesItem key={recipe.title} recipe={recipe} />;
        })}
      </ul>
    </>
  );
};

export default MyRecipesList;
