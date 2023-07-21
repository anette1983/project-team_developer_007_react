import React from 'react';
import css from '../CategoryDetails/Category.module.css';
import { Link } from 'react-router-dom';

const CategoryRecipeList = ({ recipeByCategory }) => {
  return (
    <ul className={css.tabs_list}>
      {recipeByCategory?.flatMap(({ title, _id, preview }) => (
        <li key={_id} className={css.list_item}>
          <Link to={`/recipe/${_id}`}>
            <img className={css.img} src={preview} alt={title} />
            <div className={css.title_wrapp}>
              <p className={css.title}>{title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryRecipeList;
