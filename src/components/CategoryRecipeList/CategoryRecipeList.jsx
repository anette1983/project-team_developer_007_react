import React from 'react';
import css from '../CategoryDetails/Category.module.css';
import { Link } from 'react-router-dom';

const CategoryRecipeList = ({ recipeByCategory }) => {
  return (
    <ul className={css.tabs_list}>
      {recipeByCategory?.flatMap(({ title, _id, preview }) => (
        <li key={_id} className={css.list_item}>
          <img className={css.img} src={preview} alt={title} />
          <div className={css.title_wrapp}>
            <Link to={`/recipe/${_id}`} className={css.title}>
              {title}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryRecipeList;
