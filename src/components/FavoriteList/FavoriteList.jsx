import FavoriteItem from 'components/FavoriteItem/FavoriteItem';
import React from 'react';
import css from './FavoriteList.module.css';

function FavoriteList({ favoriteRecipes }) {
  console.log(favoriteRecipes);
  return (
    <>
      <ul className={css.list}>
        {favoriteRecipes?.map(recipe => {
          return <FavoriteItem key={recipe.title} recipe={recipe} />;
        })}
      </ul>
    </>
  );
}

export default FavoriteList;
