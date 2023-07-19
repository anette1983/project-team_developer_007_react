import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import css from './MyRecipesList.module.css';
import { useSelector } from 'react-redux';
import { selectMyRecipes } from 'redux/myRecipes/selectors';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const MyRecipesList = () => {
  const [searchParams] = useSearchParams();
  const [currentPage] = useState(Number(searchParams.get('page') || 1));

  const myRecipes = useSelector(selectMyRecipes);

  return (
    <>
      {myRecipes.length > 0 ? (
        <ul className={css.list}>
          {myRecipes?.map(recipe => {
            return (
              <MyRecipesItem
                key={recipe._id}
                recipe={recipe}
                page={currentPage}
              />
            );
          })}
        </ul>
      ) : (
        <p>There are no your recipes yet. Please start to create</p>
      )}
    </>
  );
};

export default MyRecipesList;
