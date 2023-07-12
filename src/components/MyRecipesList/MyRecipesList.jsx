import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import { useDispatch } from 'react-redux';
// import { selectMyRecipes } from 'redux/myRecipes/selectors';
import recipesFromServer from '../../recipes.json';
import { logOut } from 'redux/auth/operations';
import css from './MyRecipesList.module.css';

const MyRecipesList = () => {
  const dispatch = useDispatch();
  // const myRecipes2 = useSelector(selectMyRecipes);
  console.log('recipesFromServer :>> ', recipesFromServer);

  // сделать ниже рабочую разметку по файлу джсон (если максим не сделал норм ответ)!!!

  // const myRecipes = useSelector(selectMyRecipes);
  return (
    <>
      <ul className={css.list}>
        <button onClick={() => dispatch(logOut())}>logout</button>
        {recipesFromServer.map(recipe => {
          return <MyRecipesItem key={recipe._id} recipe={recipe} />;
        })}
      </ul>
    </>
  );
};

export default MyRecipesList;
