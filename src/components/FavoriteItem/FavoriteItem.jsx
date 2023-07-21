import { Link } from 'react-router-dom';
import css from './FavoriteItem.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BiTrash } from 'react-icons/bi';
import {
  deleteFavoriteRecipi,
  fetchFavoriteRecipes,
} from 'redux/favoriteRecipes/operations';
import { useDispatch } from 'react-redux';

const FavoriteItem = ({ recipe }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    const data = id;
    dispatch(deleteFavoriteRecipi(data));
    setTimeout(() => {
      dispatch(fetchFavoriteRecipes());
    }, 500);

    Notify.success(`Recipe deleted successfully`);
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
