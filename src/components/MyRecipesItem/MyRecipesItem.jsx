import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import css from './MyRecipesItem.module.css';
import { deleteMyRecipe, fetchMyRecipes } from 'redux/myRecipes/operations';
import sprite from '../../images/svg/sprite.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const MyRecipesItem = ({ recipe }) => {
  const [delId, setDelId] = useState();
  const dispatch = useDispatch();

  const handleDelete = id => {
    setDelId(id);
    dispatch(deleteMyRecipe(id));
    dispatch(fetchMyRecipes());
    return Notify.success(`Recipe deleted successfully`);
  };

  return (
    <li className={css.card_container}>
      <div className={css.img_wrapper}>
        <img
          src={`${recipe.preview}`}
          alt={`${recipe.title}`}
          className={css.img}
        />
      </div>
      <button
        className={css.delete_btn}
        type="button"
        onClick={() => handleDelete(recipe._id)}
        disabled={delId === recipe._id}
      >
        <svg>
          <use href={sprite + '#trash'} />
        </svg>
      </button>
      <div className={css.wrapper}>
        <div className={css.top_wrapper}>
          <h2 className={css.card_title}>{recipe.title}</h2>
          <p className={css.card_text}>{recipe.description}</p>
        </div>
        <div className={css.bottom_wrapper}>
          <span className={css.card_time}>{recipe.time} min</span>

          <Link
            to={`/recipe/${recipe._id}`}
            state={{ from: `/my` }}
            className={css.card_btn}
          >
            See recipe {recipe.id}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default MyRecipesItem;
