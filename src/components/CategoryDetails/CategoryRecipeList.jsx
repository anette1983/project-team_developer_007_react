import React from 'react';
import css from '../CategoryDetails/Category.module.css';

function CategoryRecipeList({ recipeByCategory }) {
  return (
    <ul className={css.tabs_list}>
      {recipeByCategory.map(({ title, _id, preview }) => (
        <li key={_id}>
          <img className={css.img} src={preview} alt={title} />
          <div className={css.title_wrapp}>
            <h3 className={css.title}>{title}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CategoryRecipeList;
