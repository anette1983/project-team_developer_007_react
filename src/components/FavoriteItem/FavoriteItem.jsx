import { Link } from 'react-router-dom';
import css from './FavoriteItem.module.css';
// import sprite from '../../images/svg/sprite.svg';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BiTrash } from 'react-icons/bi';

const FavoriteItem = ({ recipe, childToParent }) => {
  const [delId, setDelId] = useState();

  const handleDelete = id => {
    const data = id;
    Notify.success(`Recipe deleted successfully`);
    setTimeout(() => {
      childToParent(data);
      setDelId(id);
    }, 1000);
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
          <BiTrash size="100%" />
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

export default FavoriteItem;
