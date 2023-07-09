import AuthNav from 'components/AuthNav.jsx/AuthNav';

import { useDispatch } from 'react-redux';
import { constants } from 'redux/constants';
import { useSelector } from 'react-redux';
import { selectPage, selectRecipes } from 'redux/recipes/selectors';
import {
  fetchByCategory,
  fetchMainPage,
  fetchMore,
} from 'redux/recipes/operations';

console.log(constants.categoryFilters);
console.log(constants.ingredientsFilters);
//console.log(constants.recipes.slice(0, 4));

const WelcomePage = () => {
  const recipes = useSelector(selectRecipes);
  const page = useSelector(selectPage);
  console.log(recipes);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome Page</h1>
      <AuthNav />
      <ul>
        {recipes.map(el => {
          return <li key={el._id.$oid}>{el.title}</li>;
        })}
      </ul>
      <button onClick={() => dispatch(fetchMainPage())}>fetchMainPage</button>
      <button onClick={() => dispatch(fetchByCategory('Beef'))}>
        fetchByCategory
      </button>
      <button onClick={() => dispatch(fetchMore({ category: 'Beef', page }))}>
        fetchMore
      </button>
    </>
  );
};

export default WelcomePage;
